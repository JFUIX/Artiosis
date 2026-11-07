'use client';
import {useEffect} from 'react';
export default function AmbientInteractions(){
 useEffect(()=>{
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const selector='.service,.work-card';
  const cards=Array.from(document.querySelectorAll<HTMLElement>(selector));
  let frame=0,active:HTMLElement|null=null;
  const move=(event:PointerEvent)=>{
   const target=(event.target as Element)?.closest?.(selector) as HTMLElement|null;
   if(target!==active){active?.classList.remove('spotlight-active');active=target;active?.classList.add('spotlight-active');}
   if(!target)return;
   const rect=target.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top;
   if(frame)cancelAnimationFrame(frame);
   frame=requestAnimationFrame(()=>{target.style.setProperty('--mouse-x',x+'px');target.style.setProperty('--mouse-y',y+'px');frame=0;});
  };
  const leave=()=>{active?.classList.remove('spotlight-active');active=null;};
  if(fine&&!reduce){document.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',leave);}
  const revealElements=Array.from(document.querySelectorAll<HTMLElement>('.section-top,.service,.work-card,.about-grid>div,.proof-panel,.faq-grid>div,.contact-grid>div,.hero-grid>div,.hero-bottom'));
  let observer:IntersectionObserver|null=null;
  if(!reduce&&'IntersectionObserver' in window){
   revealElements.forEach((el,i)=>{el.classList.add('scroll-reveal');el.style.setProperty('--reveal-delay',((i%4)*75)+'ms');});
   observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer?.unobserve(entry.target);}})},{threshold:.08,rootMargin:'0px 0px -24px 0px'});
   revealElements.forEach(el=>observer?.observe(el));
  }
  return()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave);if(frame)cancelAnimationFrame(frame);observer?.disconnect();cards.forEach(c=>c.classList.remove('spotlight-active'));revealElements.forEach(el=>{el.classList.remove('scroll-reveal','is-visible');el.style.removeProperty('--reveal-delay');});};
 },[]);
 return null;
}

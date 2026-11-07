'use client';
import {useEffect} from 'react';
export default function AmbientInteractions(){
 useEffect(()=>{
  const fine=window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  if(!fine.matches||reduced.matches)return;
  const selector='.service,.work-card,.proof-panel,.contact-form,.floating-card,.value-list > div,.faq-item,.contact-options a';
  const cards=Array.from(document.querySelectorAll<HTMLElement>(selector));
  let frame=0;let active:HTMLElement|null=null;let x=0,y=0;
  const move=(event:PointerEvent)=>{const target=(event.target as Element)?.closest?.(selector) as HTMLElement|null;if(!target){if(active)active.classList.remove('spotlight-active');active=null;return;}if(active!==target){active?.classList.remove('spotlight-active');target.classList.add('spotlight-active');active=target;}const r=target.getBoundingClientRect();x=event.clientX-r.left;y=event.clientY-r.top;if(!frame)frame=requestAnimationFrame(()=>{target.style.setProperty('--mouse-x',x+'px');target.style.setProperty('--mouse-y',y+'px');frame=0;});};
  const leave=()=>{active?.classList.remove('spotlight-active');active=null;};
  document.addEventListener('pointermove',move,{passive:true});document.addEventListener('pointerleave',leave);
  return()=>{document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',leave);if(frame)cancelAnimationFrame(frame);cards.forEach(c=>c.classList.remove('spotlight-active'));};
 },[]);
 return null;
}

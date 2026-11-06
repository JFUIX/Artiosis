"use client";
import {useEffect, useRef} from "react";

/** Artiosis cinematic neon reveal. */
export default function CinematicOrbit(){
  const orbit = useRef<SVGSVGElement>(null);
  const scene = useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const update = ()=>{
      const svg = orbit.current, host = scene.current;
      if(!svg || !host) return;
      const r = svg.getBoundingClientRect();
      host.style.setProperty("--light-x", `${r.left + r.width / 2}px`);
      host.style.setProperty("--light-y", `${r.top + r.height / 2}px`);
    };
    update();
    window.addEventListener("resize",update,{passive:true});
    return ()=>window.removeEventListener("resize",update);
  },[]);
  return <div className="cinematic-scene" ref={scene} aria-hidden="true">
    <div className="site-awaken"/>
    <div className="site-night"/>
    <div className="site-lightwave"/>
    <div className="arriving-light"/>
    <svg ref={orbit} className="art-orbit" viewBox="0 0 720 720" focusable="false">
      <defs><radialGradient id="art-core">
        <stop offset="0%" stopColor="#38bda2" stopOpacity=".34"/>
        <stop offset="50%" stopColor="#096162" stopOpacity=".1"/>
        <stop offset="100%" stopColor="#096162" stopOpacity="0"/>
      </radialGradient></defs>
      <g className="orbit-birth">
        <circle className="orbit-core" cx="360" cy="360" r="265"/>
        <g className="orbit-group">
          <ellipse className="orbital-path" cx="360" cy="360" rx="280" ry="130" transform="rotate(-28 360 360)"/>
          <ellipse className="orbital-path" cx="360" cy="360" rx="280" ry="130" transform="rotate(27 360 360)"/>
          <ellipse className="orbital-path" cx="360" cy="360" rx="280" ry="130" transform="rotate(78 360 360)"/>
          <circle className="orbit-point" cx="595" cy="211" r="3"/>
        </g>
        <g className="orbit-group second">
          <ellipse className="orbital-path" cx="360" cy="360" rx="235" ry="230" transform="rotate(-42 360 360)"/>
          <ellipse className="orbital-path" cx="360" cy="360" rx="295" ry="90" transform="rotate(-75 360 360)"/>
          <ellipse className="orbital-path" cx="360" cy="360" rx="295" ry="90" transform="rotate(15 360 360)"/>
          <circle className="orbit-point" cx="645" cy="360" r="2"/>
        </g>
      </g>
    </svg>
  </div>;
}

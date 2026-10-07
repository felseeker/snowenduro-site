"use client";

import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [nearViewport, setNearViewport] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setNearViewport(true);
        observer.disconnect();
      }
    }, { rootMargin: "160px" });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!nearViewport || !motionAllowed || !video) return;
    video.load();
    void video.play().catch(() => undefined);
  }, [motionAllowed, nearViewport]);

  return (
    <video
      ref={videoRef}
      className="hero-video__media"
      autoPlay={motionAllowed && nearViewport}
      muted
      loop
      playsInline
      preload="none"
      poster="/media/snowmobile-rider.jpg"
      aria-hidden="true"
    >
      {nearViewport && motionAllowed && <source src="/media/snowmobile-winter-ride.mp4" type="video/mp4" />}
    </video>
  );
}

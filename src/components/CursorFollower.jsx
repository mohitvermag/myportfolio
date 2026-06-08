import React, { useEffect, useRef } from 'react';

const CursorFollower = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const canUseFinePointer = window.matchMedia('(pointer: fine)').matches;
    const wantsMotion = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!canUseFinePointer || !wantsMotion) {
      return undefined;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const pointer = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const follower = { x: pointer.x, y: pointer.y };
    let frameId;

    const movePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    const animate = () => {
      follower.x += (pointer.x - follower.x) * 0.16;
      follower.y += (pointer.y - follower.y) * 0.16;

      if (dot && ring) {
        dot.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
        ring.style.transform = `translate3d(${follower.x}px, ${follower.y}px, 0) translate(-50%, -50%)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', movePointer);
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('pointermove', movePointer);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-runner" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
};

export default CursorFollower;

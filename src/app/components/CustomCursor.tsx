import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const [isPointerFine, setIsPointerFine] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hasPointerFine = window.matchMedia('(pointer: fine)').matches;
    setIsPointerFine(hasPointerFine);
  }, []);

  useEffect(() => {
    if (!isPointerFine) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateFollower = () => {
      followerX += (mouseX - followerX) * 0.1;
      followerY += (mouseY - followerY) * 0.1;
      follower.style.transform = `translate(${followerX}px, ${followerY}px)`;
      requestAnimationFrame(animateFollower);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateFollower();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 bg-[#FFD700] rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-[#FFD700] rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}

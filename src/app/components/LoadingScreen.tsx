import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100 && containerRef.current && textRef.current) {

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(onComplete, 200);
        }
      });

      tl.to(textRef.current, {
        scale: 2,
        duration: 0.6,
        ease: 'power2.in'
      })
      .to(textRef.current, {
        opacity: 0,
        duration: 0.3
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4
      });
    }
  }, [progress, onComplete]);

  useEffect(() => {
    if (pathRef.current) {
      const path = pathRef.current;
      const length = path.getTotalLength();

      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;

      gsap.to(path, {
        strokeDashoffset: 0,
        fillOpacity: 1,
        duration: 3,
        ease: 'power1.inOut'
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >

<svg
   width="130"
   height="217"
   viewBox="0 0 210 297"
   version="1.1"
   id="svg5"
><path
        ref={pathRef}
        stroke='#ffd700'
        strokeWidth="2"
        fill="#ffd700"
        fillOpacity="0"
       d="m 103.71005,19.722945 c -7.814848,0.209556 -19.529729,2.06554 -31.660481,5.244462 -26.9261,7.055964 -34.584751,14.2255 -32.319773,30.238932 C 41.36238,66.749318 33.089615,117.3931 21.346968,167.75404 9.6043824,218.11481 4.7207677e-7,261.23141 4.7207677e-7,263.56407 c 0,2.33253 20.08887152792323,6.05147 44.64169052792323,8.26291 24.552652,2.21142 50.779768,4.8463 58.288089,5.85534 25.34689,3.40722 75.17449,-29.83191 91.21278,-60.84688 35.7859,-69.2021 8.69384,-121.906144 -58.05833,-112.95284 l -38.71354,5.18998 10.45879,-41.199657 c 5.7526,-22.661589 7.99487,-43.669693 4.98431,-46.680113 -1.12843,-1.128361 -4.41484,-1.595655 -9.10374,-1.469865 z m 26.73657,106.915965 c 9.60155,-0.32109 16.60449,8.15598 16.60449,28.49081 0,11.7845 -7.62532,37.50212 -16.94932,57.15094 -11.00553,23.19246 -24.37596,35.72531 -38.10861,35.72531 -18.954776,0 -20.442849,-4.6398 -14.323991,-44.64152 6.644616,-43.44024 34.447061,-76.11389 52.777431,-76.72554 z" /></svg>

      <div ref={textRef} className="text-center">
        <p className="text-white text-xl mb-2 tracking-wide">
          crie estratégias, inspire resultados
        </p>
        <div className="text-[#FFD700] text-5xl font-bold tracking-wider">
          {progress}%
        </div>
      </div>
    </div>
  );
}

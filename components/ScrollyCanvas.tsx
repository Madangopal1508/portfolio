"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, useSpring } from "framer-motion";

// Configuration for the image sequence
const FRAME_COUNT = 45;
const getFramePath = (index: number) => {
  const paddedIndex = index.toString().padStart(2, "0");
  return `/sequence/frame_${paddedIndex}_delay-0.066s.png`;
};

export default function ScrollyCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        // If it's the first frame, draw it immediately
        if (i === 0 && canvasRef.current) {
          drawToCanvas(img);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Function to calculate object-fit: cover and draw
  const drawToCanvas = (image: HTMLImageElement) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx || !image) return;

    // Set canvas dimensions to match display size
    const { width, height } = canvas.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    const canvasAspect = width / height;
    const imgAspect = image.width / image.height;

    let renderWidth, renderHeight, x, y;

    if (canvasAspect > imgAspect) {
      // Canvas is wider than image
      renderWidth = width;
      renderHeight = width / imgAspect;
      x = 0;
      y = (height - renderHeight) / 2;
    } else {
      // Canvas is taller than image
      renderHeight = height;
      renderWidth = height * imgAspect;
      y = 0;
      x = (width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(image, x, y, renderWidth, renderHeight);
  };

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    
    const image = images[frameIndex];
    if (image && image.complete) {
      drawToCanvas(image);
    }
  });

  // Handle resize to redraw the current frame
  useEffect(() => {
    const handleResize = () => {
      const currentProgress = smoothProgress.get();
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(currentProgress * FRAME_COUNT)
      );
      const image = images[frameIndex];
      if (image && image.complete) {
        drawToCanvas(image);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, smoothProgress]);

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}

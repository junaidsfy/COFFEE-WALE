import { useEffect, useRef } from "react";

export default function CoffeeAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const frameCount = 135;
    const images: HTMLImageElement[] = [];

    let currentFrame = 0;
    let targetFrame = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNumber = String(i).padStart(3, "0");
      img.src = `/frames/ezgif-frame-${frameNumber}.jpg`;
      images.push(img);
    }

    const drawFrame = (frame: number) => {
      const frameIndex = Math.min(
        frameCount - 1,
        Math.max(0, Math.round(frame))
      );

      const img = images[frameIndex];

      if (!img || !img.complete) return;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      context.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.max(
        canvas.width / img.width,
        canvas.height / img.height
      );

      const width = img.width * scale;
      const height = img.height * scale;

      const x = (canvas.width - width) / 2;
      const y = (canvas.height - height) / 2;

      context.drawImage(
        img,
        x,
        y,
        width,
        height
      );
    };

    const renderLoop = () => {
      currentFrame += (targetFrame - currentFrame) * 0.10;

      drawFrame(currentFrame);

      requestAnimationFrame(renderLoop);
    };

    const handleScroll = () => {
      const track = document.getElementById(
        "hero-scroll-track"
      );

      if (!track) return;

      const rect = track.getBoundingClientRect();

      const trackHeight = rect.height;
      const scrolled = -rect.top;
      const maxScroll =
        trackHeight - window.innerHeight;

      let progress = scrolled / maxScroll;

      progress = Math.max(
        0,
        Math.min(1, progress)
      );

      // Hold first frame and last frame
      const startHold = 0.08;
      const endHold = 0.92;

      if (progress < startHold) {
        targetFrame = 0;
      } else if (progress > endHold) {
        targetFrame = frameCount - 1;
      } else {
        const adjustedProgress =
          (progress - startHold) /
          (endHold - startHold);

        targetFrame =
          adjustedProgress *
          (frameCount - 1);
      }

      const heroContent =
        document.getElementById(
          "hero-content"
        );

      if (heroContent) {
        heroContent.style.opacity = String(
          Math.max(0, 1 - progress * 4)
        );

        heroContent.style.transform =
          `translateY(-${progress * 100}px)`;
      }
    };

    const handleResize = () => {
      drawFrame(currentFrame);
    };

    images[0].onload = () => {
      drawFrame(0);
      renderLoop();
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "resize",
        handleResize
      );
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}
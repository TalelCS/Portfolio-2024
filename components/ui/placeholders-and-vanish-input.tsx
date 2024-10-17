"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function VanishingText({
  text,
}: {
  text: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const newDataRef = useRef<any[]>([]);
  const [animating, setAnimating] = useState(false);

  // Function to draw the text on the canvas
  // Function to draw the text on the canvas
const draw = useCallback(() => {
  if (!text) return;
  const canvas = canvasRef.current;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  canvas.width = 800;
  canvas.height = 200;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Text style and placement
  ctx.font = "32px Arial";
  ctx.fillStyle = "#FFF";

  // Calculate the width of the text to center it
  const textWidth = ctx.measureText(text).width;
  const xPosition = (canvas.width - textWidth) / 2;
  const yPosition = canvas.height / 2 + 16; // Adjusted to center vertically

  ctx.fillText(text, xPosition, yPosition);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const pixelData = imageData.data;
  const newData: any[] = [];

  for (let t = 0; t < 200; t++) {
    let i = 4 * t * 800;
    for (let n = 0; n < 800; n++) {
      let e = i + 4 * n;
      if (
        pixelData[e] !== 0 ||
        pixelData[e + 1] !== 0 ||
        pixelData[e + 2] !== 0
      ) {
        newData.push({
          x: n,
          y: t,
          color: [
            pixelData[e],
            pixelData[e + 1],
            pixelData[e + 2],
            pixelData[e + 3],
          ],
        });
      }
    }
  }

  newDataRef.current = newData.map(({ x, y, color }) => ({
    x,
    y,
    r: 1,
    color: `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`,
  }));
}, [text]);

  // Animation function to make the text vanish
  const animate = (start: number) => {
    const animateFrame = (pos: number = 0) => {
      requestAnimationFrame(() => {
        const newArr = [];
        for (let i = 0; i < newDataRef.current.length; i++) {
          const current = newDataRef.current[i];
          if (current.x < pos) {
            newArr.push(current);
          } else {
            if (current.r <= 0) {
              current.r = 0;
              continue;
            }
            current.x += Math.random() > 0.5 ? 1 : -1;
            current.y += Math.random() > 0.5 ? 1 : -1;
            current.r -= 0.05 * Math.random();
            newArr.push(current);
          }
        }
        newDataRef.current = newArr;
        const ctx = canvasRef.current?.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, 800, 200);
          newDataRef.current.forEach((t) => {
            const { x: n, y: i, r: s, color: color } = t;
            ctx.beginPath();
            ctx.rect(n, i, s, s);
            ctx.fillStyle = color;
            ctx.fill();
          });
        }
        if (newDataRef.current.length > 0) {
          animateFrame(pos - 8);
        } else {
          setAnimating(false);
        }
      });
    };
    animateFrame(start);
  };

  // Draw the text immediately and start the animation after 3 seconds
  useEffect(() => {
    draw();

    const timeout = setTimeout(() => {
      setAnimating(true);
      const maxX = newDataRef.current.reduce(
        (prev, current) => (current.x > prev ? current.x : prev),
        0
      );
      animate(maxX);
    }, 3000); // 3 seconds delay

    return () => clearTimeout(timeout);
  }, [draw]);

  return (
    <div className="relative w-full h-12 flex justify-center items-center">
      {/* Canvas for the animation */}
      <canvas
        className={cn(
          "pointer-events-none transform scale-75 filter invert dark:invert-0 transition-opacity duration-500",
          animating ? "opacity-100" : "opacity-100"
        )}
        ref={canvasRef}
      />
    </div>
  );
}

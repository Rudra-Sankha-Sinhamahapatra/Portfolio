/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { useEffect } from "react";

const CometCanvas = () => {
  useEffect(() => {
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;

    const canvas = document.createElement("canvas");
    canvas.setAttribute("width", canvasWidth.toString());
    canvas.setAttribute("height", canvasHeight.toString());
    canvas.style.position = "absolute";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";

    const effectContainer = document.getElementById("effect");
    if (effectContainer) {
      effectContainer.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Comet settings
    let comets = Array.from({ length: 5 }, () => createComet());

    function createComet() {
      return {
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        speedX: (Math.random() - 0.5) * 1.0, // Reduced speed
        speedY: (Math.random() - 0.5) * 1.0,
        trail: [] as { x: number; y: number }[],
        trailLength: 25, // Reduced trail length
        color: `rgba(255, ${220 + Math.random() * 35}, ${220 + Math.random() * 35}, 1)`,
        radius: Math.random() * 0.4 + 0.2, // Small and consistent size
      };
    }

    function updateComets() {
      comets.forEach((comet) => {
        comet.x += comet.speedX;
        comet.y += comet.speedY;

        // Reset comet if it goes out of bounds
        if (comet.x < 0 || comet.x > canvasWidth || comet.y < 0 || comet.y > canvasHeight) {
          Object.assign(comet, createComet());
        }

        // Add position to trail
        comet.trail.push({ x: comet.x, y: comet.y });
        if (comet.trail.length > comet.trailLength) {
          comet.trail.shift(); // Remove old trail points
        }
      });
    }

    function renderComets() {
      ctx.clearRect(0, 0, canvasWidth, canvasHeight);

      comets.forEach((comet) => {
        // Draw comet trail
        comet.trail.forEach((point, index) => {
          const alpha = index / comet.trailLength; // Gradual fade effect
          ctx.fillStyle = comet.color.replace("1)", `${alpha})`);
          ctx.beginPath();
          ctx.arc(point.x, point.y, comet.radius, 0, Math.PI * 2);
          ctx.fill();
        });

        // Draw comet head (blended with trail)
        ctx.fillStyle = comet.color.replace("1)", "0.8)"); // Slightly transparent head
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.radius, 0, Math.PI * 2); // Same size as trail
        ctx.fill();
      });
    }

    function animate() {
      updateComets();
      renderComets();
      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      if (effectContainer) {
        effectContainer.removeChild(canvas);
      }
    };
  }, []);

  return null;
};

export default CometCanvas;

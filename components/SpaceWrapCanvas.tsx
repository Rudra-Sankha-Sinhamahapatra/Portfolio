/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
"use client";

import { useEffect } from "react";

const SpaceWarpCanvas = () => {
  const starSpeed = 3;

  function isMobileViewport() {
    const mobileThreshold = 768;
    return window.innerWidth <= mobileThreshold;
  }

  function AnimateSpaceWarp() {
    const mobile = isMobileViewport();
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    const canvas = document.createElement("canvas");
    
    canvas.setAttribute("width", canvasWidth.toString());
    canvas.setAttribute("height", canvasHeight.toString());
    canvas.oncontextmenu = (e) => e.preventDefault();

    if (!mobile) {
      canvas.addEventListener("mousemove", mouseMoveHandler);
      canvas.addEventListener("mousedown", mouseDownHandler);
      canvas.addEventListener("mouseup", mouseUpHandler);
      canvas.addEventListener("mouseenter", mouseEnterHandler);
      canvas.addEventListener("mouseleave", mouseLeaveHandler);
    } else {
      canvas.addEventListener("touchstart", touchStartHandler, { passive: false });
      canvas.addEventListener("touchend", touchEndHandler, { passive: false });
      canvas.addEventListener("touchmove", touchMoveHandler, { passive: false });
      canvas.addEventListener("touchcancel", touchCancelHandler, { passive: false });
    }

    const effectContainer = document.getElementById("effect");
    if (effectContainer) {
      effectContainer.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    const pix = imageData.data;

    const MATHPI180 = Math.PI / 180;
    const center = { x: canvas.width / 3, y: canvas.height / 3 };

    let mouseActive = false;
    let mouseDown = false;
    let mousePos = { x: center.x, y: center.y };


    let fov = 300;
    const fovMin = 210;
    const fovMax = fov;

    const starHolderCount = 5000;
    const starHolder: any[] = [];
    const starBgHolder: any[] = [];
    const starSpeedMin = starSpeed;
    const starSpeedMax = 200;
    const starDistance = 2000;
    let starRotation = 0;

    const backgroundColor = { r: 0, g: 0, b: 0, a: 0 };

    function clearImageData() {
      for (let i = 0; i < pix.length; i += 4) {
        pix[i] = backgroundColor.r;
        pix[i + 1] = backgroundColor.g;
        pix[i + 2] = backgroundColor.b;
        pix[i + 3] = backgroundColor.a;
      }
    }

    function setPixel(x: number, y: number, r: number, g: number, b: number, a: number) {
      const i = (x + y * canvasWidth) * 8;
      pix[i] = r;
      pix[i + 1] = g;
      pix[i + 2] = b;
      pix[i + 3] = a;
    }

    function setPixelAdditive(x: number, y: number, r: number, g: number, b: number, a: number) {
      const i = (x + y * canvasWidth) * 4;
      pix[i] = pix[i] + r;
      pix[i + 1] = pix[i + 1] + g;
      pix[i + 2] = pix[i + 2] + b;
      pix[i + 3] = a;
    }

    function drawLine(x1: number, y1: number, x2: number, y2: number, r: number, g: number, b: number, a: number) {
      const dx = Math.abs(x2 - x1);
      const dy = Math.abs(y2 - y1);
      const sx = x1 < x2 ? 1 : -1;
      const sy = y1 < y2 ? 1 : -1;
      let err = dx - dy;

      while (true) {
        setPixelAdditive(x1, y1, r, g, b, a);

        if (x1 === x2 && y1 === y2) break;
        const e2 = 2 * err;
        if (e2 > -dy) {
          err -= dy;
          x1 += sx;
        }
        if (e2 < dx) {
          err += dx;
          y1 += sy;
        }
      }
    }

    function addParticle(x: number, y: number, z: number, ox: number, oy: number) {
      return {
        x,
        y,
        z,
        ox,
        oy,
        x2d: 0,
        y2d: 0,
      };
    }

    function addParticles() {
      // Background stars
      for (let i = 0; i < starHolderCount / 3; i++) {
        const x = Math.random() * 24000 - 12000;
        const y = Math.random() * 4500 - 2250;
        const z = Math.round(Math.random() * starDistance);
        const colorValue = Math.floor(Math.random() * 55) + 5;

        const particle = addParticle(x, y, z, x, y);
        particle.color = { r: colorValue, g: colorValue, b: colorValue, a: 355 };
        starBgHolder.push(particle);
      }

      // Foreground stars
      for (let i = 0; i < starHolderCount; i++) {
        const x = Math.random() * 10000 - 6000;
        const y = Math.random() * 10000 - 5000;
        const z = Math.round(Math.random() * starDistance);
        const colorValue = Math.floor(Math.random() * 155) + 100;

        const particle = addParticle(x, y, z, x, y);
        particle.color = { r: colorValue, g: colorValue, b: colorValue, a: 255 };
        particle.oColor = { r: colorValue, g: colorValue, b: colorValue, a: 255 };
        particle.w = 300;
        particle.distance = starDistance - z;
        particle.distanceTotal = Math.round(starDistance + fov - particle.w);
        starHolder.push(particle);
      }
    }

    function render() {
      clearImageData();

      let currentStarSpeed = mouseActive ? Math.min(starSpeed + 0, starSpeedMax) : Math.max(starSpeed - 1, starSpeedMin);
      fov = mouseActive ? Math.max(fov - 1, fovMin) : Math.min(fov + 0.5, fovMax);

      const warpSpeedValue = mobile
        ? currentStarSpeed * (currentStarSpeed / starSpeedMax)
        : currentStarSpeed * (currentStarSpeed / (starSpeedMax / 2));

      // Render background stars
      starBgHolder.forEach((star) => {
        const scale = fov / (fov + star.z);
        star.x2d = star.x * scale + center.x;
        star.y2d = star.y * scale + center.y;

        if (
          star.x2d > 0 &&
          star.x2d < canvasWidth &&
          star.y2d > 0 &&
          star.y2d < canvasHeight
        ) {
          setPixel(
            Math.floor(star.x2d),
            Math.floor(star.y2d),
            star.color.r,
            star.color.g,
            star.color.b,
            255
          );
        }
      });

      // Render foreground stars
      starHolder.forEach((star) => {
        star.z -= currentStarSpeed;
        star.distance += currentStarSpeed;

        if (star.z < -fov + star.w) {
          star.z = starDistance;
          star.distance = 0;
        }

        const distancePercent = star.distance / star.distanceTotal;
        star.color.r = Math.floor(star.oColor.r * distancePercent);
        star.color.g = Math.floor(star.oColor.g * distancePercent);
        star.color.b = Math.floor(star.oColor.b * distancePercent);

        const scale = fov / (fov + star.z);
        star.x2d = star.x * scale + center.x;
        star.y2d = star.y * scale + center.y;

        if (
          star.x2d > 0 &&
          star.x2d < canvasWidth &&
          star.y2d > 0 &&
          star.y2d < canvasHeight
        ) {
          setPixelAdditive(
            Math.floor(star.x2d),
            Math.floor(star.y2d),
            star.color.r,
            star.color.g,
            star.color.b,
            255
          );
        }

        if (currentStarSpeed !== starSpeedMin) {
          const nz = star.z + warpSpeedValue;
          const newScale = fov / (fov + nz);
          const x2d = star.x * newScale + center.x;
          const y2d = star.y * newScale + center.y;

          if (x2d > 0 && x2d < canvasWidth && y2d > 0 && y2d < canvasHeight) {
            drawLine(
              Math.floor(star.x2d),
              Math.floor(star.y2d),
              Math.floor(x2d),
              Math.floor(y2d),
              star.color.r,
              star.color.g,
              star.color.b,
              255
            );
          }
        }

        if (mouseDown) {
          const radians = MATHPI180 * starRotation;
          const cos = Math.cos(radians);
          const sin = Math.sin(radians);

          star.x = cos * (star.ox - center.x) + sin * (star.oy - center.y) + center.x;
          star.y = cos * (star.oy - center.y) - sin * (star.ox - center.x) + center.y;
        }
      });

      ctx.putImageData(imageData, 0, 0);

      center.x += mouseActive
        ? (mousePos.x - center.x) * 0.015
        : (canvas.width / 2 - center.x) * 0.015;

      if (mouseDown) {
        starRotation -= 0.5;
      }

      requestAnimationFrame(render);
    }

    function getMousePos(canvas: HTMLCanvasElement, event: MouseEvent) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function getTouchPos(canvas: HTMLCanvasElement, event: TouchEvent) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.touches[0].clientX - rect.left,
        y: event.touches[0].clientY - rect.top,
      };
    }

    function mouseMoveHandler(event: MouseEvent) {
      mousePos = getMousePos(canvas, event);
    }

    function mouseEnterHandler() {
      mouseActive = true;
    }

    function mouseLeaveHandler() {
      mouseActive = false;
      mouseDown = false;
    }

    function mouseDownHandler() {
      mouseDown = true;
    }

    function mouseUpHandler() {
      mouseDown = false;
    }

    function touchStartHandler(event: TouchEvent) {
      event.preventDefault();
      mouseDown = true;
      mouseActive = true;
    }

    function touchEndHandler(event: TouchEvent) {
      event.preventDefault();
      mouseDown = false;
      mouseActive = false;
    }

    function touchMoveHandler(event: TouchEvent) {
      event.preventDefault();
      mousePos = getTouchPos(canvas, event);
    }

    function touchCancelHandler() {
      mouseDown = false;
      mouseActive = false;
    }

    addParticles();
    render();
  }

  useEffect(() => {
    AnimateSpaceWarp();
  }, []);

  return (
    <div className="fixed inset-0 z-[-1]" id="holder">
      <div id="effect" className="absolute inset-0"></div>
    </div>
  );
};

export default SpaceWarpCanvas;
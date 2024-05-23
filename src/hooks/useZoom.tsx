import { useState, useEffect, RefObject } from 'react';

interface UseZoomReturn {
  x: number;
  y: number;
}

export const useZoom = (elementRef: RefObject<HTMLDivElement>) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const handleZoom = (e: MouseEvent | TouchEvent) => {
    
    const zoomer = elementRef.current;
    if (!zoomer) return;

    let offsetX: number, offsetY: number;

    if ('offsetX' in e) {
      offsetX = e.offsetX;
      offsetY = e.offsetY;
    } else {
      offsetX = e.touches[0].pageX;
      offsetY = e.touches[0].pageY;
    }

    const xPercent = (offsetX / zoomer.offsetWidth) * 100;
    const yPercent = (offsetY / zoomer.offsetHeight) * 100;

    setX(xPercent);
    setY(yPercent);

    zoomer.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
  };

  const removeBg = () => {
    const zoomer = elementRef.current;
    if (!zoomer) return;
    zoomer.style.backgroundImage = ""
  }

  useEffect(() => {
    const zoomer = elementRef.current;
    if (!zoomer) return;

    zoomer.addEventListener('mousemove', handleZoom);
    zoomer.addEventListener('touchmove', handleZoom);
    zoomer.addEventListener('touchend', handleZoom);
    zoomer.addEventListener('mouseleave', handleZoom);
    
    
    return () => {
      zoomer.removeEventListener('mousemove', handleZoom);
      zoomer.removeEventListener('touchmove', handleZoom);
      zoomer.addEventListener('touchend', handleZoom);
      zoomer.addEventListener('mouseleave', handleZoom);
    };
  }, [elementRef]);

  return { x, y };
};
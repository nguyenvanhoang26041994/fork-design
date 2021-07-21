import { useState, useRef, useEffect, useMemo } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export default function useModalMeansure(open, style = {}, { centered, margin }) {
  const modalRef = useRef();
  const portalRef = useRef();

  const [modalBounds, setModalBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [portalBounds, setPortalBounds] = useState({ left: 0, top: 0, width: 0, height: 0 });

  const roModal = useRef(new ResizeObserver(([entry]) => setModalBounds(entry.contentRect)));
  const roPortal = useRef(new ResizeObserver(([entry]) => setPortalBounds(entry.contentRect)));

  useEffect(() => {
    if (modalRef.current) {
      roModal.current.observe(modalRef.current);
    }

    if (portalRef.current) {
      roPortal.current.observe(portalRef.current);
    }

    return () => {
      roModal.current.disconnect();
      roPortal.current.disconnect();
    }
  }, [open]);

  const modalStyle = useMemo(() => {
    if (centered) {
      return {
        maxHeight: `calc(100% - ${2 * margin}px)`,
        ...style,
      };
    }

    if ('top' in style) {
      return {
        maxHeight: `calc(100% - ${margin + style.top}px)`,
        ...style,
      };
    }

    const topSpace = portalBounds.height - modalBounds.height - margin;
  
    if (topSpace >= 100 || !portalBounds.height || !modalBounds.height) {
      return {
        top: 100,
        maxHeight: `calc(100% - ${2 * margin}px)`,
        ...style,
      };
    }
    return {
      top: topSpace,
      maxHeight: `calc(100% - ${2 * margin}px)`,
      ...style,
    };
  }, [
    portalBounds.height,
    modalBounds.height,
    margin,
    centered,
    style.top,
  ]);

  return {
    modalRef,
    portalRef,
    modalBounds,
    portalBounds,
    modalStyle,
  };
}

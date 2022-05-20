import { useRef, useEffect } from 'react';

export default ({ targetRef, option, callback }) => {
  const ibRef = useRef();
  useEffect(() => {
    const observer = new window.IntersectionObserver(callback, option);
    ibRef.current = observer;

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }
  }, []);
};

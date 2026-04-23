
import { useEffect, useRef } from 'react';
import { IoHeadset } from "react-icons/io5";


const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const circlePosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    // Track mouse position
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };


      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateCircle = () => {
      const dx = mousePosition.current.x - circlePosition.current.x;
      const dy = mousePosition.current.y - circlePosition.current.y;


      circlePosition.current.x += dx * 0.07;
      circlePosition.current.y += dy * 0.07;

      if (circleRef.current) {
        circleRef.current.style.left = `${circlePosition.current.x}px`;
        circleRef.current.style.top = `${circlePosition.current.y}px`;
      }

      requestAnimationFrame(animateCircle);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCircle();

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>

      <div
        ref={dotRef}
        className="fixed w-3 h-3 flex justify-center items-center rounded-full pointer-events-none z-[9999]"

        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s',
        }}
      >
        <IoHeadset className='text-2xl  text-blue-500' />
      </div>

      {/* Circle follower */}
      <div
        ref={circleRef}
        className="fixed w-9 h-9 border-2  shadow-2xl shadow-blue-500 border-blue-500 rounded-full pointer-events-none z-[9998]"

        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.2s, height 0.2s, border-color 0.2s',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6), 0 0 40px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(59, 130, 246, 0.2)',
        }}
      />
    </>
  );
};

export default CustomCursor;

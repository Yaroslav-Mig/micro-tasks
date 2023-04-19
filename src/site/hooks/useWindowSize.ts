import { useEffect, useState } from 'react';

type WindowSizeType = number | undefined;

type WindowSizeState = {
  width: WindowSizeType;
  height: WindowSizeType;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeState>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
		}

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
	}, []);
	
  return windowSize;
};

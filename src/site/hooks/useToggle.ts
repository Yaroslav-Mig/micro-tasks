import { useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [toggle, setToggle] = useState<boolean>(initialValue);

  const toggleAction = () => setToggle((prev) => !prev);

  return [toggle, toggleAction];
};

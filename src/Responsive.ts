import { useMediaQuery } from 'react-responsive';

export function Responsive() {
  return {
    isDesktop: useMediaQuery({ minDeviceWidth: 1224 }),
    isMobile: useMediaQuery({ maxDeviceWidth: 1224 }),
  };
}

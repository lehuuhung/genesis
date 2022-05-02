import React from 'react';
import useDeviceDetect from '../hooks/useDeviceDetect';
const Layout = ({ children, currentUser }: React.PropsWithChildren<{ currentUser?: any | null }>) => {
  const { isMobile } = useDeviceDetect();
  return <div className={isMobile ? 'mobile' : 'web'}>{children}</div>;
};

export default Layout;

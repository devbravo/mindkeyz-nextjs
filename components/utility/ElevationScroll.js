import React from 'react';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const ElevationScroll = props => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true, // whether or not their is a delay upon scrolling
    threshold: 0, // 0 - 100, at 0 triggers when users starts scrolling
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll
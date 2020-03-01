import * as React from 'react';
import { Box } from 'rebass';
import { LAYOUT_SIDEBAR_WIDTH_PX, LAYOUT_NAVBAR_HEIGHT_PX } from './constants';

export const Layout = ({ children, ...props }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: `${LAYOUT_SIDEBAR_WIDTH_PX}px auto`,
      gridTemplateRows: `${LAYOUT_NAVBAR_HEIGHT_PX}px auto`,
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
    {...props}
  >
    {children}
  </Box>
);

import * as React from 'react';
import { Box } from 'rebass';

export const LayoutItemMain = ({ children, ...props }) => (
  <Box
    sx={{
      overflow: 'hidden',
      gridColumn: '2 / last-line',
      gridRow: '2 / last-line',
    }}
    {...props}
  >
    {children}
  </Box>
);

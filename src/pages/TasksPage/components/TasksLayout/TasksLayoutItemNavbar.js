import * as React from 'react';
import { Box } from 'rebass';

export const TasksLayoutItemNavbar = ({ children, ...props }) => (
  <Box
    sx={{
      overflow: 'hidden',
      gridColumn: '1 / last-line',
      gridRow: '1 / 2',
    }}
    {...props}
  >
    {children}
  </Box>
);

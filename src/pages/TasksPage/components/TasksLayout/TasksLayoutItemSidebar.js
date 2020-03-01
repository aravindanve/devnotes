import * as React from 'react';
import { Box } from 'rebass';

export const TasksLayoutItemSidebar = ({ children, ...props }) => (
  <Box
    sx={{
      overflow: 'hidden',
      gridColumn: '1 / 2',
      gridRow: '2 / last-line',
    }}
    {...props}
  >
    {children}
  </Box>
);

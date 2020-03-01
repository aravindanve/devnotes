import * as React from 'react';
import { Box } from 'rebass';
import {
  TASKS_LAYOUT_SIDEBAR_WIDTH_PX,
  TASKS_LAYOUT_NAVBAR_HEIGHT_PX,
} from './constants';

export const TasksLayout = ({ children, ...props }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'grid',
      gridTemplateColumns: `${TASKS_LAYOUT_SIDEBAR_WIDTH_PX}px auto`,
      gridTemplateRows: `${TASKS_LAYOUT_NAVBAR_HEIGHT_PX}px auto`,
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
    {...props}
  >
    {children}
  </Box>
);

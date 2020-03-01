import * as React from 'react';
import { Box } from 'rebass';
import { MAIN_KANBAN_STATUS_COLUMN_WIDTH_PX } from './constants';

export const StatusBoard = ({ children, ...props }) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: `repeat(${
        children ? children.length : 0
      }, ${MAIN_KANBAN_STATUS_COLUMN_WIDTH_PX}px)`,
      gridTemplateRows: '100%',
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
  >
    {children}
  </Box>
);

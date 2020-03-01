import * as React from 'react';
import { Box } from 'rebass';
import { TASKS_MAIN_KANBAN_STATUS_ROW_HEIGHT_PX } from './constants';

export const TasksMainKanbanColumn = ({ children, ...props }) => (
  <Box
    px={3}
    sx={{
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: `${TASKS_MAIN_KANBAN_STATUS_ROW_HEIGHT_PX}px`,
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
    {...props}
  >
    <Box
      sx={{
        position: 'relative',
        borderBottom: t => `${t.colors.lightgray} solid 1px`,
      }}
    >
      <Box
        pb={1}
        sx={{
          position: 'absolute',
          bottom: 0,
        }}
      >
        TODO
      </Box>
    </Box>
    <Box pt={2}>Cards</Box>
  </Box>
);

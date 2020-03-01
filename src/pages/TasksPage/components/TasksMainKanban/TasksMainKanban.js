import * as React from 'react';
import { Box } from 'rebass';
import { TASKS_MAIN_KANBAN_STATUS_COLUMN_WIDTH_PX } from './constants';
import { TasksMainKanbanColumn } from './TasksMainKanbanColumn';

export const TasksMainKanban = ({ ...props }) => (
  <Box
    sx={{
      overflow: 'auto',
      width: '100%',
      height: '100%',
    }}
    {...props}
  >
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(4, ${TASKS_MAIN_KANBAN_STATUS_COLUMN_WIDTH_PX}px)`,
        gridTemplateRows: '100%',
        gridAutoColumns: 0,
        gridAutoRows: 0,
      }}
    >
      <TasksMainKanbanColumn />
      <TasksMainKanbanColumn />
      <TasksMainKanbanColumn />
      <TasksMainKanbanColumn />
    </Box>
  </Box>
);

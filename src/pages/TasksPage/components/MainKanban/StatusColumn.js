import * as React from 'react';
import { Box } from 'rebass';
import { MAIN_KANBAN_STATUS_ROW_HEIGHT_PX } from './constants';
import { StatusColumnHeading } from './StatusColumnHeading';
import { StatusColumnContent } from './StatusColumnContent';

export const StatusColumn = ({ children, title, ...props }) => (
  <Box
    px={3}
    sx={{
      display: 'grid',
      gridTemplateColumns: '100%',
      gridTemplateRows: `${MAIN_KANBAN_STATUS_ROW_HEIGHT_PX}px auto`,
      gridAutoColumns: 0,
      gridAutoRows: 0,
    }}
    {...props}
  >
    <StatusColumnHeading text={title} />
    <StatusColumnContent>{children}</StatusColumnContent>
  </Box>
);

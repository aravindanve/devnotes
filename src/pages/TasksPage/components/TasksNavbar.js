import * as React from 'react';
import { Box } from 'rebass';

export const TasksNavbar = ({ ...props }) => (
  <Box
    sx={{
      width: '100%',
      height: '100%',
      borderBottom: t => `${t.colors.lightgray} solid 1px`,
    }}
    {...props}
  >
    Navbar
  </Box>
);

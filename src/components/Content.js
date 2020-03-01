import * as React from 'react';
import { Box } from 'rebass';

export const Content = ({ children, ...props }) => (
  <Box p={3} {...props}>
    {children}
  </Box>
);

import * as React from 'react';
import { Box } from 'rebass';

export const Stage = ({ children, ...props }) => (
  <Box width='100vw' height='100vh' {...props}>
    {children}
  </Box>
);

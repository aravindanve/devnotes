import * as React from 'react';
import { Box } from 'rebass';

export const StatusColumnContent = ({ children, ...props }) => (
  <Box pt={2} {...props}>
    {children}
  </Box>
);

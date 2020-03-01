import * as React from 'react';
import { Box, Text } from 'rebass';

export const StatusColumnHeading = ({ text, ...props }) => (
  <Box
    sx={{
      position: 'relative',
      borderBottom: t => `${t.colors.lightgray} solid 1px`,
    }}
    {...props}
  >
    <Box py={3}>
      <Text variant='heading'>{text}</Text>
    </Box>
  </Box>
);

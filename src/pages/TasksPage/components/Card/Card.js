import * as React from 'react';
import { Box, Text } from 'rebass';

export const Card = ({ children, ...props }) => (
  <Box
    p={3}
    mb={2}
    sx={{
      border: t => `${t.colors.lightgray} solid 1px`,
      borderRadius: 4,
      backgroundColor: t => t.colors.lightgray,
    }}
    {...props}
  >
    <Text variant='body'>
      Hello! I'm what you call a card. But sometimes I'm also called a task. You
      can call me either, I won't mind at all. :)
    </Text>
  </Box>
);

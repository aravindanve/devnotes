import * as React from 'react';
import { Box, Flex } from 'rebass';
import { LAYOUT_SIDEBAR_WIDTH_PX } from '../Layout';

export const Navbar = ({ ...props }) => (
  <Flex
    sx={{
      width: '100%',
      height: '100%',
    }}
    {...props}
  >
    <Box
      sx={{
        width: `${LAYOUT_SIDEBAR_WIDTH_PX}px`,
        borderRight: t => `${t.colors.lightgray} solid 1px`,
      }}
    >
      A
    </Box>
    <Box
      sx={{
        width: 'auto',
        flexGrow: 1,
        borderBottom: t => `${t.colors.lightgray} solid 1px`,
      }}
    >
      B
    </Box>
  </Flex>
);

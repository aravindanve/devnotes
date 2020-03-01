import * as React from 'react';
import { Box, Text } from 'rebass';
import { Content } from '../../../components/Content';

export const TasksSidebar = ({ ...props }) => (
  <Box
    sx={{
      overflowX: 'hidden',
      overflowY: 'scroll', // TODO: use scrollbar library
      width: '100%',
      height: '100%',
      borderRight: t => `${t.colors.lightgray} solid 1px`,
    }}
    {...props}
  >
    <Content>
      <Text variant='display'>Sidebar</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
      <Text>Lorem Ipsum</Text>
    </Content>
  </Box>
);

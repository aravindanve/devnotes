import * as React from 'react';
import { Box } from 'rebass';
import { StatusColumn } from './StatusColumn';
import { StatusBoard } from './StatusBoard';
import { Card } from '../Card';

export const MainKanban = ({ ...props }) => (
  <Box
    sx={{
      overflow: 'auto',
      width: '100%',
      height: '100%',
    }}
    {...props}
  >
    <StatusBoard>
      <StatusColumn title='TODO'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StatusColumn>
      <StatusColumn title='IN PROGRESS'>
        <Card />
        <Card />
        <Card />
      </StatusColumn>
      <StatusColumn title='IN REVIEW'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StatusColumn>
      <StatusColumn title='TESTING'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </StatusColumn>
      <StatusColumn title='ACCEPTED'>
        <Card />
        <Card />
        <Card />
      </StatusColumn>
    </StatusBoard>
  </Box>
);

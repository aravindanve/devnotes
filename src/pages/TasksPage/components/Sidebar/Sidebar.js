import * as React from 'react';
import { Box, Text } from 'rebass';
import { Content } from '../../../../components/Content';

export const Sidebar = ({ ...props }) => (
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
      <Text variant='heading' mb={2}>
        Projects{' '}
        <Text as='span' sx={{ fontWeight: 'initial', opacity: 0.3 }}>
          $
        </Text>
      </Text>
      <Box mb={3}>
        <Text>Bugs & Chores</Text>
        <Text>Video On-Demand</Text>
        <Text>Web admin stats</Text>
        <Text>K8s (staging)</Text>
        <Text>K8s (production)</Text>
        <Text>Web client redesign</Text>
        <Text>K8s (CI/CD)</Text>
        <Text>K8s (auto-scaling)</Text>
        <Text>Android app</Text>
        <Text>iOS app redesign</Text>
        <Text>API v2</Text>
      </Box>

      <Text variant='heading' mb={2}>
        People{' '}
        <Text as='span' sx={{ fontWeight: 'initial', opacity: 0.3 }}>
          @
        </Text>
      </Text>
      <Box mb={3}>
        <Text>Ashutosh Tripathi</Text>
        <Text>Aravindan Ve</Text>
        <Text>Borna</Text>
        <Text>Ernest Jones</Text>
        <Text>Ferdinand Mueck</Text>
        <Text>Sheesh Mohsin</Text>
        <Text>Yisuk Kim</Text>
      </Box>

      <Text variant='heading' mb={2}>
        Tags{' '}
        <Text as='span' sx={{ fontWeight: 'initial', opacity: 0.3 }}>
          #
        </Text>
      </Text>
      <Box mb={3}>
        <Text>Android</Text>
        <Text>AWS</Text>
        <Text>Azure</Text>
        <Text>Backend</Text>
        <Text>Frontend/ Web</Text>
        <Text>Frontend/ Web admin</Text>
        <Text>Infrastructure</Text>
        <Text>iOS</Text>
      </Box>
    </Content>
  </Box>
);

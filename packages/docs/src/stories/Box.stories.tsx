import type { StoryObj, Meta } from '@storybook/react'
import {Box, BoxProps, Text} from '@design-system-test/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Teste Box</Text>
    
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
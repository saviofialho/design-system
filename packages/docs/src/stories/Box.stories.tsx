import type { StoryObj, Meta } from '@storybook/react'
import {Box, BoxProps} from '@design-system-test/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {},
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
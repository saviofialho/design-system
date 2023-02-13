import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps } from '@design-system-test/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: 'Enviar'
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big'
  }
}
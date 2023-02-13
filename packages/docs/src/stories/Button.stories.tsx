import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@universo-ui/react'

export default {
  title: 'Form/Button',
  component: Button,

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
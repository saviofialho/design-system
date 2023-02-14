import type { StoryObj, Meta } from '@storybook/react'
import {Text, TextProps} from '@design-system-test/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aliquid ab non."
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "Strong text",
    as: 'strong'
  }
}
import type { StoryObj, Meta } from '@storybook/react'
import {Heading, HeadingProps} from '@design-system-test-sf/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: "Custom title"
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: "H1 Heading",
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: 'Heading will use `h2` as its default tag, but we can change it with the property `as`.'
      }
    }
  }
}
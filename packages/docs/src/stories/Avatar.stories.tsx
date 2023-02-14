import type { StoryObj, Meta } from '@storybook/react'
import {Avatar, AvatarProps} from '@design-system-test/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: "https://github.com/dcramer.png",
    alt: "David Cramer"
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
}
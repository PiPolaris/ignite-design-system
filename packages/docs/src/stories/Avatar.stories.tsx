import { Avatar, AvatarProps } from '@pi-polaris-sandbox/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/pipolaris.png',
    alt: 'Ana Gomes',
  },
  argTypes: {
    src: {
      control: { type: 'text' },
    },
  },
} as Meta

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}

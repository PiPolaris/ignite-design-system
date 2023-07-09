import { Box, BoxProps, Text } from '@pi-polaris-sandbox/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando a Box</Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: 'null' },
    },
  },
} as Meta

export const Primary: StoryObj<BoxProps> = {}

import { Box, BoxProps, Text } from '@ignite-ui/react'
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
} as Meta

export const Primary: StoryObj<BoxProps> = {}

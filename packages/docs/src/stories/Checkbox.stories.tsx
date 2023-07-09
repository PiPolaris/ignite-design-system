import { Box, Checkbox, CheckboxProps, Text } from '@pi-polaris-sandbox/react'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => {
      return (
        <Box
          as={'label'}
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
}

export const Checked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
  },
}

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
}

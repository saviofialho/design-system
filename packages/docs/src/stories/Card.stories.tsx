import type { StoryObj, Meta } from '@storybook/react'
import {Box, Button, Card, CardProps, Heading, Text, TextInput} from '@design-system-test/react'

export default {
  title: 'Components/Card',
  component: Card,
  args: {},
  decorators: [
    () => {
      return (
        <Card css={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Heading size="2xl">Teste Título</Heading>
          <Text size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, reprehenderit?</Text>
          <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', padding: '0', marginTop: '10px' }}
        >
          <Text size="lg">Email address</Text>
          <TextInput placeholder='placeholder' />
        </Box>
          <Button>Button</Button>
        </Card>
      )
    },
  ],
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput_, TextInputRootProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput_.Root,
  args: {
    children: [
      <TextInput_.Icon>
        <Envelope />
      </TextInput_.Icon>,
      <TextInput_.Input placeholder='Type your e-mail address' />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput_.Input placeholder='Type your e-mail address' />
  }
}
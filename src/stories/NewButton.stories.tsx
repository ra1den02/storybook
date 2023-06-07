import type { Meta, StoryObj } from "@storybook/react";

import NewButton from "./NewButton";

const meta: Meta<typeof NewButton> = {
  title: "Button",
  component: NewButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    name: "John Doe",
    age: 25,
    href: "https://www.youtube.com/watch?v=NlwZ7nszqB0&list=LL&index=35&t=6206s",
  },
  argTypes: {
    name: {
      description: "The name of the student",
    },
    defaultColor: {
      description: "The color of the button by default",
    },
  },
};

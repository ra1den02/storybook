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
    email: "john@example.com",
    isStudent: true,
  },
};

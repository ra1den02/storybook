import type { Meta, StoryObj } from "@storybook/react";

import News from "./News";

const meta: Meta<typeof News> = {
  title: "Components/News",
  component: News,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    title: "Breaking News",
    content: "Russians proved yet again that they are fucking terrorists",
    author: "John Doe",
    img: "1.jpg",
    date: "June 1, 2023",
  },
};

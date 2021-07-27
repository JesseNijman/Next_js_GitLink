import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { YourComponent } from "./YourComponent";

export default {
  title: "Example/MyOwnStuff/YourComponent",
  component: YourComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof YourComponent>;

// const Template = (args) => <YourComponent {...args} />;
const Template: ComponentStory<typeof YourComponent> = (args) => (
  <YourComponent {...args} />
);

export const FirstStory = Template.bind({});

FirstStory.args = {
  backgroundColor: "#F00F00",
  text: "Put some text in here please.",
};

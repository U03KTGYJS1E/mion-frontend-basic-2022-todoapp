import React, { Component } from "react";
import { Title } from "./index";

export default {
  component: Component,
  title: "Atoms/Title",
  parameters: {
    background: {
      default: "dark",
    },
  },
};

const Template = (args) => <Component {...args} />;
export const Default = Template.bind({});

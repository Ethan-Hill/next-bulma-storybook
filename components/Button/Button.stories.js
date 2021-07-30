/* eslint-disable import/no-anonymous-default-export */

import React from "react";

import { Button } from "./index";

export default {
  component: Button,
  title: "Components/Button",
};

const Template = (args) => <Button {...args}>Button</Button>;

export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Link = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});
export const Warning = Template.bind({});
export const Danger = Template.bind({});

Default.args = {
  className: "button",
};

Primary.args = {
  className: "button is-primary",
};

Link.args = {
  className: "button is-link",
};

Info.args = {
  className: "button is-info",
};

Success.args = {
  className: "button is-success",
};

Warning.args = {
  className: "button is-warning",
};

Danger.args = {
  className: "button is-danger",
};

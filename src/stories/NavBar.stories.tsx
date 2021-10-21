import { storiesOf } from "@storybook/react";

import { NavBar } from "../components/navbar/NavBar";

const stories = storiesOf("NavBar Test", module);

stories.add("NavBar", () => {
  return <NavBar />;
});

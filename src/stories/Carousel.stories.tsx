import { storiesOf } from "@storybook/react";

import { Carousel } from "../components/carousel/Carousel";

const stories = storiesOf("Carousel Test", module);

stories.add("Carousel", () => {
  return (
    <Carousel>
      <div>woon</div>
      <div>doon</div>
      <div>poon</div>
    </Carousel>
  );
});

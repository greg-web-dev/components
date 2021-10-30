import { storiesOf } from "@storybook/react";
import { useState } from "react";

import { MenuBtn, Menu } from "../components/menu/Menu";

const stories = storiesOf("Menu Test", module);

stories.add("MenuBtn", () => {
  const [active, setActive] = useState(false);

  return <MenuBtn active={active} onClick={() => setActive(!active)} />;
});

stories.add("Menu El", () => {
  const [active, setActive] = useState(false);
  const [page, setPage] = useState("Home");

  const menuOptions = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "sadklfjadlkfj",
      url: "#blog",
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "skyblue",
      }}
    >
      <Menu
        active={active}
        onClick={(menuItem) => {
          setPage(menuItem.name);
          setActive(false);
        }}
        menuOptions={menuOptions}
      />
      <MenuBtn
        active={active}
        onClick={() => setActive(!active)}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: 8,
        }}
      />
      Active Page: {page}
    </div>
  );
});

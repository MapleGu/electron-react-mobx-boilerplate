import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

import routes from "../../constants/routes.json";
import { useStores } from "../../hooks/use-stores";

const LinkCounter = observer(() => {
  return <Link to={routes.COUNTER}>COUNTER</Link>
});
// eslint-disable-next-line import/prefer-default-export
export const ThemeToggler = observer(() => {
  const { themeStore } = useStores();

  return (
    <>
      <div>{themeStore.theme}</div>
      <button type="button" onClick={() => themeStore.setTheme("light")}>
        set theme: light
      </button>
      <button type="button" onClick={() => themeStore.setTheme("dark")}>
        set theme: dark
      </button>
      <LinkCounter />
    </>
  );
});

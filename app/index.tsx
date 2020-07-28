import React, { Fragment } from "react";
import { render } from "react-dom";
import { AppContainer as ReactHotAppContainer } from "react-hot-loader";
import { enableLogging } from "mobx-logger";

import Root from "./containers/Root";
import "./app.global.css";

enableLogging({
  predicate: () => true,
  action: true,
  reaction: true,
  transaction: true,
  compute: true,
});

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener("DOMContentLoaded", () =>
  render(
    <AppContainer>
      <Root />
    </AppContainer>,
    document.getElementById("root")
  )
);

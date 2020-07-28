import React from "react";

import { storesContext } from "../contexts";

// eslint-disable-next-line import/prefer-default-export
export const useStores = () => React.useContext(storesContext);

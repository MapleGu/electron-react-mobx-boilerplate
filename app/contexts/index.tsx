import React from 'react';

import CounterStore from '../stores/counter-store';
import ThemeStore from '../stores/theme-store';

// eslint-disable-next-line import/prefer-default-export
export const storesContext = React.createContext({
  counterStore: new CounterStore(),
  themeStore: new ThemeStore(),
});

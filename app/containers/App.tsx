// import React, { ReactNode } from 'react';

// type Props = {
//   children: ReactNode;
// };

// export default function App(props: Props) {
//   const { children } = props;
//   return <>{children}</>;
// }
import React, { ReactNode } from "react";

type AppProps = {
  children: ReactNode;
};

class App extends React.Component<AppProps> {
  componentDidUpdate() {
    // eslint-disable-next-line no-console
    console.log("update", this.props);
  }

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default App;

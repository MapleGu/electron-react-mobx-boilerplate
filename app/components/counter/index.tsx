import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import routes from "../../constants/routes.json";
import { useStores } from "../../hooks/use-stores";
// import styles from './Home.css';

// eslint-disable-next-line import/prefer-default-export
export const Counter = observer(() => {
  const { counterStore } = useStores();

  return (
    <>
      <div>{counterStore.count}</div>
      <button type="button" onClick={() => counterStore.increment()}>
        ++
      </button>
      <button type="button" onClick={() => counterStore.decrement()}>
        --
      </button>
      <Link to={routes.HOME}>HOME</Link>
    </>
  );
});

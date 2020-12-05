import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Albums from "./components/Albums";
import { loading_data } from "./redux/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loading_data());
  }, [dispatch]);

  return <Albums />;
}

export default App;

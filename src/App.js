import React from "react";
import Routers from "./router";
import { Provider } from 'react-redux';
import './config/ReactotronConfig';
import store from './store';

function App() {
  return (

    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;

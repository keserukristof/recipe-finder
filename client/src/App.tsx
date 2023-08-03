import { FunctionComponent } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'

import { Layout } from './components/app-shell/Layout/layout.component';

import { store } from './store'

const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
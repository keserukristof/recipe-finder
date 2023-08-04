import { FunctionComponent } from 'react';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux'

import { store } from './store'
import { Layout } from './components/app-shell/Layout/layout.component';
import { apiSlice } from './features/api/api.slice';


const App: FunctionComponent = () => {
  return (
    <Provider store={store}>
      <ApiProvider api={apiSlice}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </ApiProvider>
    </Provider>
  );
};

export default App;
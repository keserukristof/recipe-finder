import { FunctionComponent } from 'react';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';

import { Layout } from './components/app-shell/Layout/layout.component';

import { apiSlice } from './features/api/api.slice';


const App: FunctionComponent = () => {
  return (
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ApiProvider>
  );
};

export default App;
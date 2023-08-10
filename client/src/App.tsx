import { FunctionComponent } from 'react';
import { BrowserRouter } from "react-router-dom";
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { Provider } from 'react-redux'

import { store } from './store';
import { Layout } from './components/app-shell/Layout/layout.component';
import { ingredientsApi  } from './features/api/api.slice';


const App: FunctionComponent = () => {
  return (
    <ApiProvider api={ingredientsApi}>
      <Provider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </Provider>
    </ApiProvider>
  );
};

export default App;
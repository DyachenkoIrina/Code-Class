import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { SaasProvider } from '@saas-ui/react';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/provider';
import App from './App'
import { store } from './redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ChakraProvider>
      {/* <SaasProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </SaasProvider> */}
    </ChakraProvider>
  </BrowserRouter>,
);

import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import './index.css';
import RouterConfig from './RouterConfig';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CssBaseline />
    <QueryClientProvider client={new QueryClient()}>
      <RecoilRoot>
        <RouterConfig />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>
);

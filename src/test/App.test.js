import { render, screen, fireEvent } from '@testing-library/react';
import {Provider} from 'react-redux';
import {QueryClient, QueryClientProvider} from 'react-query'
import store from '../reduxElements/Store.js'

import App from '../components/App.js';

const queryClient = new QueryClient();

test('renders learn react link', () => {
  render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  );
  const linkElement = screen.getByText(/Beer/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders list', () => {
  const root = document.createElement('div');
  render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
  );
  const list = root.querySelector('.product-list');
  expect(list).toBeInTheDocument();
});
 
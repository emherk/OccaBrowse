import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Router, Navigate } from 'react-router-dom'
import '@testing-library/jest-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import App from '../components/App'
import store from '../reduxElements/Store.js'
import Product from '../components/Product'

const queryClient = new QueryClient();

const wrapper = ({ children }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {children}
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}


const products =
    [
        {
            "name": "Beer Malone",
            "productCode": "1",
            "numberAvailable": 70,
            "nextDelivery": "2023-02-15T14:41:25.139Z",
            "productImage": "https://via.placeholder.com/150"
        },
        {
            "name": "Beer Gay",
            "productCode": "2",
            "numberAvailable": 2,
            "nextDelivery": "2022-08-28T12:36:34.927Z",
            "productImage": "https://via.placeholder.com/150"
        },
        {
            "name": "Beer Mullins",
            "productCode": "3",
            "numberAvailable": 29,
            "nextDelivery": "2022-03-26T19:48:57.502Z",
            "productImage": "https://via.placeholder.com/150"
        },
        {
            "name": "Beer Hendricks",
            "productCode": "4",
            "numberAvailable": 78,
            "nextDelivery": "2022-05-05T11:07:30.170Z",
            "productImage": "https://via.placeholder.com/150"
        }
    ]
const server = setupServer(
    rest.get('https://my-json-server.typicode.com/emherk/OccaBrowse/products', (req, res, ctx) => {
        return res(ctx.json(products))
    }),
)

const renderWithRouter = (ui, { route = '/products' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return render(ui, { wrapper: wrapper })
}
beforeAll(() => {
    server.listen()
})
beforeEach(() => {
    const history = createMemoryHistory({ initialEntreis: ['/products'] })
    renderWithRouter(
        <App />
    )
})
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Search bar renders', async () => {
    await waitFor(() => { expect(screen.getByRole('textbox')).toBeInTheDocument() })
})
test('Product list renders', async () => {
    await waitFor(() => { expect(screen.getAllByText(/Beer [A-Z][a-z]*/)).toHaveLength(4) })
})
test('Clicking on a beer redirects', async () => {
    let link;
    await waitFor(() => { link = screen.getByText('Beer Malone') })
    userEvent.click(link);
    expect(window.location.href).toBe('http://localhost/products/1')
})
import './App.css'
import { Main } from './components/Main'
import { ProductProvider } from './providers/ProductProvider'
import { ProductsProvider } from './providers/ProductsProvider'

function App() {
  return (
    <ProductsProvider>
      <ProductProvider>
        <Main />
      </ProductProvider>
    </ProductsProvider>
  )
}

export default App

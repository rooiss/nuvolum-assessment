import './App.css'
import { Main } from './components/Main'
import { ProductsProvider } from './providers/ProductsProvider'

function App() {
  return (
    <ProductsProvider>
      <div className="App">
        <Main />
      </div>
    </ProductsProvider>
  )
}

export default App

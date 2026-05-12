import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Product from "./pages/Product"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Layout from "./UI/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Layout>
  )
}

export default App
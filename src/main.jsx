import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { registerSW } from "virtual:pwa-register";
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import App from "./App"
import "./styles.css"
import { CartProvider } from "./context/CartContext";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    toast.info("App ready to work offline.");
  },
});
// Error boundary for production
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
       <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center px-4">
          <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
            
            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-100">
              <span className="text-2xl">⚠️</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              Something went wrong
            </h1>

            {/* Message */}
            <p className="text-gray-500 mb-6">
              We hit an unexpected error. Try refreshing the page.
            </p>

            {/* Button */}
            <button
              onClick={() => window.location.reload()}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
        <BrowserRouter>
        <CartProvider>
          <div className="overflow-x-hidden">
            <App />
          </div>
          <ToastContainer
           position="top-right"
            autoClose={3000}
              theme="colored"
            />

            </CartProvider>
        </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
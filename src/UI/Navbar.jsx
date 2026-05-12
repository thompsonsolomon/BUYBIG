import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ShoppingCart, User } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [dropdown, setDropdown] = useState(false)
  const user={
    isLoggedIn: true,
  }

  return (
    <nav className="bg-white shadow-soft sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-primary-600">
            Buybig
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-gray-600">
            <Link to="/shop" className="hover:text-primary-600">Shop</Link>
            <Link to="/vendors" className="hover:text-primary-600">Vendors</Link>
            <Link to="/orders" className="hover:text-primary-600">Orders</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* CART */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-600" />
              <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs px-1.5 rounded-full">
                0
              </span>
            </Link>

            {/* USER SECTION */}
            {!user?.isLoggedIn ? (

              // LOGIN BUTTON
              <Link
                to="/login"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
              >
                Login
              </Link>

            ) : (

              // DROPDOWN
              <div className="relative">

                <button
                  onClick={() => setDropdown(!dropdown)}
                  className="flex items-center gap-2 bg-primary-50 px-3 py-2 rounded-xl hover:bg-primary-100 transition"
                >
                  <User className="w-4 h-4 text-primary-600" />
                  <span className="text-sm text-primary-700 font-medium">
                    {user.name}
                  </span>
                </button>

                {/* DROPDOWN MENU */}
                {dropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-card rounded-xl overflow-hidden animate-fade-in">

                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Profile
                    </Link>

                    <Link
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      My Orders
                    </Link>

                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-gray-50"
                    >
                      Settings
                    </Link>

                    <button
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>

            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden py-4 space-y-3">

            <Link to="/shop" className="block">Shop</Link>
            <Link to="/vendors" className="block">Vendors</Link>
            <Link to="/orders" className="block">Orders</Link>

            {!user?.isLoggedIn ? (
              <Link
                to="/login"
                className="block bg-primary-600 text-white text-center py-2 rounded-lg"
              >
                Login
              </Link>
            ) : (
              <div className="border-t pt-3">

                <p className="text-sm text-gray-500 mb-2">
                  Signed in as {user.name}
                </p>

                <Link to="/profile" className="block py-1">
                  Profile
                </Link>

                <Link to="/orders" className="block py-1">
                  Orders
                </Link>

                <button className="text-red-500 mt-2">
                  Logout
                </button>

              </div>
            )}

          </div>
        )}

      </div>
    </nav>
  )
}
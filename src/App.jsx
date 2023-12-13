import { SidebarNav, Modal } from "./components/export"
import {
  Home, Product, Products, SharedLayout, Register, AddCart, Cart, AboutUs,
  Contact, Page_one,
  Page_two,
  Page_three,
  Page_four,
  SuccessPage,
  PageNotFound,
  Checkout
} from "./pages/export"
import ProtectedRoute from "./protectedRoute/ProtectedRoutes";
import User from "./user/User"
import UserSharedLayout from "./user/UserSharedLayout";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div >
      <SidebarNav />
      <Modal />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <div className="main">
        <Routes >
          <Route
            path="/"
            element={<SharedLayout />}
          >
            <Route index element={< Home />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/addtocart" element={<AddCart />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<  Contact />} />
            <Route path="/cart" element={< Cart />} />
            <Route path="/Terms_&_Conditions" element={<Page_one />} />
            <Route path="/privacy_policy" element={<Page_two />} />
            <Route path="/cookie_policy" element={<Page_three />} />
            <Route path="/exchange_policy" element={<Page_four />} />
            <Route path="/success-page" element={<SuccessPage />} />
            <Route path="/check-out" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

          <Route
            path="/my_account"
            element={<ProtectedRoute>{<UserSharedLayout />}</ProtectedRoute>}
          >
            <Route index element={<User />} />
          </Route>

          <Route path="/register" element={<Register />} />
        </Routes >
      </div>
    </div>
  )
}

export default App
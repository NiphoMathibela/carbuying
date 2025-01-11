import { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import "./App.css";
import NavBar from "./components/NavBar";
import CarDetail from "./pages/CarDetail";
import PostCar from "./pages/PostCar";
import SellCar from "./pages/SellCar";
import AppContextProvider from "./context/AppContext";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { AnimatePresence } from "framer-motion";
import Footer from "./components/Footer";

function App() {
  //Defining routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Main />} />
        <Route path="/carSearch" element={<Search />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/post-car" element={<PostCar />} />
        <Route path="/sellCar" element={<SellCar />} />
        <Route path="/registerUser" element={<Register />} />
        <Route path="/loginUser" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return (
    <AppContextProvider>
      <div className="min-h-screen bg-gray-50">
        <RouterProvider router={router} />
      </div>
    </AppContextProvider>
  );
}

function Root() {
  return (
    <>
      <NavBar />
      <main className="pt-16">
        <AnimatePresence mode="wait">
          <Outlet />
        </AnimatePresence>
      </main>
      <Footer/>
    </>
  );
}

export default App;

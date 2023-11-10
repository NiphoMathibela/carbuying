import { useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Route,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Main from "./pages/Main";
import Search from "./pages/Search";
import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  //Defing routes
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}>
      <Route index element={<Main/>}/>
      <Route path="/carSearch" element={<Search/>}/>
    </Route>)
  );

  return (
    <div className=" w-full max-w-[1080]">
      <NavBar />
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;

const Root = () => {
  return (
    <>
      <div>
        <Link></Link>
      </div>

      <div>
        <Outlet></Outlet>
      </div>
    </>
  );
};

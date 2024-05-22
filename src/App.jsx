import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Products from './AxiosData'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchNavbar from './SearchNavbar'
import Product from './product'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Products></Products>
    },
    {
      path: "product/:id",
      element: <Product></Product>
    }
  ])
  return (
    <>
      <SearchNavbar></SearchNavbar>
      <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App

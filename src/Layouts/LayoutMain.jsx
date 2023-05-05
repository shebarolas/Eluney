import React from 'react'
import { NavBar } from '../components/NavBar'
import { Outlet } from 'react-router-dom'
import '../styles/layout.css'

export const LayoutMain = () => {
  return (
    <>
        <div className="layout">
            <NavBar/>
            <Outlet/>
        </div>

    </>
  )
}

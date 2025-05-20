import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>

        {/* Heri angivet komponenterne, der danner rammen for appen */}

        <main>
          <Outlet></Outlet>
        </main>
      
    </>
  )
}

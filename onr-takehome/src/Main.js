import React from 'react'
import './Main.css'
import SideNav from './SideNav'
import DataSection from './DataSection'

export default function Main () {


  return (
    <div className="main-container">
      <SideNav />
      <div>
        <h2>Performance Management</h2>
        <h3><i>GlobeIcon</i> Diagnostic Tool</h3>
        <DataSection />
      </div>
    </div>
  )
}
import React from 'react'
import './TopNav.css'


export default function TopNav () {


  return (
    <div className="nav-bar">
      <div>
        <h1>Diagnostic Tool</h1>
      </div>
      <nav>
        <ul>
          <li><p>Logged in as General User</p></li>
          <li>|</li>
          <li>bars</li>
          <li>download</li>
          <li>copy</li>
          <li>question</li>
          <li>go</li>
        </ul>
      </nav>
    </div>
  )
}
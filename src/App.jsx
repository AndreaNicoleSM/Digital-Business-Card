import React from "react"
import './App.css'
import Header from "./components/header"
import Footer from "./components/footer"
import MainBody from "./components/main-body"

function App() {
  return (
    <div className="app">
      <Header />
      <MainBody />
      <Footer />
    </div>
  )
}

export default App

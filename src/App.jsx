import React, { useEffect, useState } from "react";
import "./App.css"
import axios from "axios"

import MainPart from './components/main'
import Main2 from './components/Main2'

import Footer from './components/Footer'
import Exp from './components/Exp'
import TestCard from './components/TestCard'
import Testimonies from "./components/Testimonies";


const App = () => {
  return (
    <>
    <main className=''>
    <MainPart/>

    </main>
    <Main2/>
   <Exp/>
<Testimonies/>
   <Footer/>

    </>
  )
}

export default App

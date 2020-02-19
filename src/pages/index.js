import React from "react"
import { Router } from "@reach/router"

import Home from "../modules/home/components/Home"
import Calculator from "../modules/calculator/components/Calculator"
import APIPlayground from "../modules/apiPlayground/components/APIPlayground"
import Docs from "../modules/docs/components/Docs"
import SiteDetails from "../modules/siteDetails/components/SiteDetails"
import NotFound from "../modules/serviceRoutes/components/NotFound"
const App = () => (
    <Router>
      <Home path="/" />
      <SiteDetails path="/blog/:contentSource/:buildType/:pages" />
      <Calculator path="/calculator" />
      <APIPlayground path="/api-playground" />
      <Docs path="/methodology-faq" />
      <NotFound path="/*" />
    </Router>
  )
  
export default App
  
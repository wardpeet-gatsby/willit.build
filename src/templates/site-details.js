import React from "react"
import { Router } from "@reach/router"

import Layout from "@modules/ui/components/Layout"
import SiteDetails from "../modules/siteDetails/components/SiteDetails"
import NotFound from "../modules/serviceRoutes/components/NotFound"

const SiteDetailsPage = () => (
  <Layout>
    <Router>
      <SiteDetails path="/details/:siteType/:contentSource/:buildType/:pages" />
      <NotFound path="/details/*" />
    </Router>
  </Layout>
)

export default SiteDetailsPage

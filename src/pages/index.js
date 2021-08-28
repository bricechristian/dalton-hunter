import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import HomeIntro from "../components/HomeIntro"
import Footer from "../components/Footer"
import SEO from "../components/Seo"

export default function IndexPage() {
  return (
    <Layout page="home" bgColor="inherit">
      <SEO pathname="home" />
      <div className="grid_3">
        <HomeIntro />
        <BlogList />
      </div>
      <Footer />
    </Layout>
  )
}
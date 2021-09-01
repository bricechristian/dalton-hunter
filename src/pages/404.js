import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import notFoundStyles from '../styles/pages/404.module.scss'

export default function NotFound() {
    return (
        <Layout page="404" bgColor="inherit">
            <SEO title="Page Not Found" description="Sorry, couldn't find that page." />
            <div className={notFoundStyles.notFound__container}>
                <h1>Sorry, couldn't find that page.</h1>
                <Link to="/" className="arrow_link">Return Home</Link>
            </div>
        </Layout>
    )
}
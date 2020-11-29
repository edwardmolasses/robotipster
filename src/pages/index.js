import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Welcome to the Robotipster Experience"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Robotipster will tell you where to invest your money.</p>
        <p>
          His algorithm is based on complicated mathematics that you don't need to understand. Just trust that robotipster knows all<sup>*</sup>.
        </p>
        <p><small><sup>*</sup>Robotipster is for entertainment purposes only and not liable for any financial losses you may incur.</small></p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Robotipsters RoboBlog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage

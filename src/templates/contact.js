import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
//import PortfolioItems from "../components/PortfolioItems"

const Contact = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);

export default Contact;
import React from "react";
import Layout from "../components/layout";
import ServiceItems from "../components/serviceItems";
import Seo from "../components/seo";
const OurServices = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <ServiceItems />
  </Layout>
);

export default OurServices;
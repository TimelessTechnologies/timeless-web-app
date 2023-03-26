import React from "react";
import Layout from "../components/layout";
import PartnerItems from "../components/partnerItems";
import Seo from "../components/seo";
const Technology = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    <PartnerItems />
  </Layout>
);

export default Technology;
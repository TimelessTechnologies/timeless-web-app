import React from "react";
import Layout from "../components/layout";
import FeaturedServices from "../components/featuredServices"
import TimelessTechnologyPartner from "../components/timelessTechnologyPartner";
import LatestNews from '../components/latestNews';
import Seo from "../components/seo";
import Partners from "../components/partnerItems"
import Landing from "../components/landing";
import Technologies from '../components/technologyItems';

export default function AboutUs({ pageContext }) {
  return <Layout>
    <Seo title={pageContext.title} />

    <Landing />

    <FeaturedServices />

    <TimelessTechnologyPartner />

    <div><Technologies /></div>

    <Partners />
    
    <LatestNews />

  </Layout>
};
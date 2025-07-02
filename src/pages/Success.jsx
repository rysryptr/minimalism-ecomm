import React from "react";
import Header from "../components/parts/Header";
import Clients from "../components/parts/Clients";
import Sitemap from "../components/parts/Sitemap";
import Footer from "../components/parts/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDetails from "../components/parts/Details/ProductDetails";
import Suggestions from "../components/parts/Details/Suggestions";
import CheckoutSuccess from "../components/parts/Success/CheckoutSuccess";
import DocumentWrapper from "../components/parts/DocumentWrapper";

function Success() {
  return (
    <DocumentWrapper>
      <Header theme="black" />
      <CheckoutSuccess />
      <Sitemap />
      <Footer />
    </DocumentWrapper>
  );
}

export default Success;

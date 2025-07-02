import React from "react";
import Header from "../components/parts/Header";
import Clients from "../components/parts/Clients";
import Sitemap from "../components/parts/Sitemap";
import Footer from "../components/parts/Footer";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import ProductDetails from "../components/parts/Details/ProductDetails";
import Suggestions from "../components/parts/Details/Suggestions";
import ShoppingCart from "../components/parts/Cart/ShoppingCart";
import ShippingCart from "../components/parts/Cart/ShippingCart";
import DocumentWrapper from "../components/parts/DocumentWrapper";

export default function Cart() {
  return (
    <DocumentWrapper>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingCart />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </DocumentWrapper>
  );
}

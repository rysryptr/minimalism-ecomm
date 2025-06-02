import React from 'react'
import Header from '../components/parts/Header'
import Clients from '../components/parts/Clients'
import Sitemap from '../components/parts/Sitemap'
import Footer from '../components/parts/Footer'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductDetails from '../components/parts/Details/ProductDetails'
import Suggestions from '../components/parts/Details/Suggestions'

export default function Details() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb 
        list={[
          { url: '/', name: "Home"},
          { url: '/categories/123/', name: "Living Room"},
          { url: '/categories/123/products/321', name: "Details"},
        ]}
      />
      <ProductDetails />
      <Suggestions />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}

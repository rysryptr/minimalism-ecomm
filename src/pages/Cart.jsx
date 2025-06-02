import React from 'react'
import Header from '../components/parts/Header'
import Clients from '../components/parts/Clients'
import Sitemap from '../components/parts/Sitemap'
import Footer from '../components/parts/Footer'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductDetails from '../components/parts/Details/ProductDetails'
import Suggestions from '../components/parts/Details/Suggestions'
import ShoppingCart from '../components/parts/Cart/ShoppingCart'
import ShippingCart from '../components/parts/Cart/ShippingCart'

export default function Cart() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb 
        list={[
          { url: '/', name: "Home"},
          { url: '/cart', name: "Cart"},
        ]}
      />
      <section class="md:py-16">
        <div class="container mx-auto px-4">
          <div class="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingCart />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  )
}

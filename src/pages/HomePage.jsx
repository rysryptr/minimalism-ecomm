import React from 'react'
import Header from '../components/parts/Header'
import Hero from '../components/parts/Hero'
import Clients from '../components/parts/Clients'
import Sitemap from '../components/parts/Sitemap'
import Footer from '../components/parts/Footer'
import BrowseRoom from '../components/parts/HomePage/BrowseRoom'
import JustArrived from '../components/parts/HomePage/JustArrived'

import useScrollAnchor from '../helpers/hooks/useScrollAnchor'
import useModalDOM from '../helpers/hooks/useModalDOM'

export default function HomePage() {
  useScrollAnchor()
  useModalDOM()

  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseRoom />
      <JustArrived />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  )
}

import Head from 'next/head'
import Hero from '../components/hero'
import Feature from '../components/feature'
import CTA from '../components/cta'
import FAQ from '../components/faq'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dopplr - Create beautiful dashboards from SQL queries</title>
      </Head>
      <Hero />
      <Feature />
      <CTA />
      <FAQ />
      <Footer />
    </>
  )
}

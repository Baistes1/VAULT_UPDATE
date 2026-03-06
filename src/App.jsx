import react from 'react'
import Navbar from './components/NavBar'
import HeroSection from './components/hero'
import Histoire from './components/Histoires'
import Collection from './components/Collection'
import RendezVous from './components/RendezVous'
import Membership from './components/Membership'
import Partenaires from './components/Partenaires'
import Footer from './components/footer'

export default function App() {
    return(
      <div>
        <Navbar />
        <div>
          <HeroSection />
          <Histoire />
          <Collection />
          <RendezVous />
          <Membership />
          <Partenaires />
          <Footer />
        </div>


      </div>
    )
}
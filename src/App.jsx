import { Billing, Business, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from "./components"

const App = () => (
  <div className="bg-primary">
    <div className={`px-[135px] py-7`}>
      <Navbar />
    </div>

    <div className={`pl-[135px] pt-7`}>
      <Hero />
    </div>

    <div className="pl-[154px] pt-[80px]">
      <Stats />
    </div>

    <div className="pt-[180px] px-[135px]">
      <Business />
    </div>

    <div className="pt-[180px] px-[135px]">
      <Billing />
    </div>

    <div className="pt-[160px] px-[135px]">
      <CardDeal />
    </div>

    <div className="pt-[150px] px-[135px]">
      <Testimonials />
    </div>

    <div className="pt-[100px] px-[186px]">
      <Clients />
    </div>

    <div className="pt-[100px] px-[135px]">
      <CTA />
    </div>

    <div className="pt-[100px] px-[135px]">
      <Footer />
    </div>

  </div>


)


export default App


import Banner from '@/components/Banner'
import Card from '@/components/Card'
import Contact from '@/components/Contact'
import Doctors from '@/components/Doctors'
import News from '@/components/News'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Card></Card>
      <Doctors></Doctors>
      <Testimonials></Testimonials>
      <News></News>
      <Contact></Contact>
    </div>
  )
}

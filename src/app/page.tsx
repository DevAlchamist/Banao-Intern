import AddOwn from '@/components/AddOwn';
import Footer from '@/components/Footer';
import Hobby from '@/components/Hobby';
import HomeScreen from '@/components/HomeScreen';
import Info from '@/components/Info';
import Nav from '@/components/Nav';
import Testimonial from '@/components/Testimonial';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <main className="">
      <Nav/>
      <HomeScreen/>
      <Info/>
      <AddOwn/>
      <Testimonial/>
      <Hobby/>
      <Footer/>
    </main>

  );
}

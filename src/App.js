import './App.css';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import CoachesSections from './components/CoachesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
// import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <AboutSection />
      {/* <BackgroundVideo videoId="FHouLLwRtLE" /> */}
      <CoachesSections />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

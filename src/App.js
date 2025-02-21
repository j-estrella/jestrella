import './App.css';
import Navbar from "./assets/components/Navbar";
import BtnReturnTop from "./assets/components/BtnReturnTop";
import MainSection from "./assets/components/MainSection";
import Expertise from './assets/components/Expertise';
import WorkExperience from './assets/components/WorkExperience';
import Content from './assets/components/Content';
import BroadcastBanner from './assets/components/BroadcastBanner';
import NvidiaVideo from "./assets/components/NvidiaVideo";
import LevVideo from "./assets/components/LevVideo";
import BroadcastVideo from "./assets/components/BroadcastVideo";
import BrandingContent from './assets/components/BrandingContent';
import LogoContent from './assets/components/LogoContent';
import SocmendContent from './assets/components/SocmedContent';
import PresentationContent from './assets/components/PresentationContent';
import OtherProjectContent from './assets/components/OtherProjectContent';
import PhotographyContent from './assets/components/PhotographyContent';
import PersonalContent from './assets/components/PersonalContent';
import Footer from "./assets/components/Footer";

function App() {
  return (
    <>
      <BtnReturnTop/>
      <Navbar/>
      <MainSection/>
      <Expertise/>
      <WorkExperience/>
      <Content/>
      <BroadcastBanner/>
      <NvidiaVideo/>
      <LevVideo/> 
      <BroadcastVideo/>
      <BrandingContent/>
      <LogoContent/>
      <SocmendContent/>
      <PresentationContent/>
      <OtherProjectContent/>
      <PhotographyContent/>
      <PersonalContent/>
      <Footer/>
    </>
  );
}

export default App;

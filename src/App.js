import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhoIHelp from "./components/WhoIHelp";
import WorkBento from "./components/WorkBento";
import { LetsTalk, Footer, VideoSection } from "./components/BottomSections";

const Portfolio = () => {
  return (
    <div className="portfolio-root">
      <Header />
      <main>
        <Hero />
        <div className="section-fade" />
        <VideoSection />
        <div className="section-fade" />
        <WhoIHelp />
        <WorkBento />
        <div className="section-fade" />
        <LetsTalk />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/danzel" element={<Portfolio />} />
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

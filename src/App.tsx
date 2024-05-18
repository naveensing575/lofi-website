// src/App.tsx
import React from "react";
import Header from "./components/Header";
import VideoBackground from "./components/VideoBackground";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <VideoBackground />
      </main>
      <Footer />
    </div>
  );
};

export default App;

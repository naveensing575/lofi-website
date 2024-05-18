// src/components/VideoBackground.tsx
import React from "react";

const VideoBackground: React.FC = () => {
  return (
    <div className="relative h-full w-full">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/path-to-your-video.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 p-4 text-center text-white">
        <h1 className="text-5xl font-bold">Lofi Vibes</h1>
        <p className="text-lg">Relax and enjoy the lofi beats</p>
      </div>
    </div>
  );
};

export default VideoBackground;

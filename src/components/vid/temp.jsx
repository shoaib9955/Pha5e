import React from 'react';

function Video() {
  return (
    <div className="h-screen flex justify-center items-center bg-gray-700 p-4">
      <div className="w-full max-w-6xl aspect-[16/9]">
        <video
          src="/nature-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  );
}

export default Video;

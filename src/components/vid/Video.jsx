import React from 'react'

function Video() {
  return (
    <div className=" h-screen flex justify-center items-center bg-gray-700 p-4">
      <div className="w-full max-w-6xl aspect-[16/9]">
        <iframe
          src="https://player.vimeo.com/video/899523911?loop=true&autoplay=true&muted=1&gesture=media&playsinline=true&byline=false&portrait=false&title=false&speed=true&transparent=false&customControls=true"
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"
          allowFullScreen
          title="Player for SHOWREEL PHA5E"
          className="w-full h-full rounded-lg"
        />
      </div>
    </div>
  )
}

export default Video

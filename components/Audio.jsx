"use client";

import Image from "next/image";
import "./Audio.css";
import { useEffect, useRef, useState } from "react";

export default function Home({ audioSource }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleIsPlaying() {
    setIsPlaying(!isPlaying);
  }

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, audioSource]);

  return (
    <section className="audio-box">
      <p className="title">Ouça o texto</p>

      {isPlaying ? (
        <Image
          src="/icons/pause.svg"
          width={14}
          height={14}
          alt="Pause"
          onClick={toggleIsPlaying}
        />
      ) : (
        <Image
          src="/icons/play.svg"
          width={14}
          height={14}
          alt="Play"
          onClick={toggleIsPlaying}
        />
      )}

      <progress value="75" max="100"></progress>

      <p className="time"><span className="current">0:00</span> / <span className="total">0:00</span></p>

      <audio
        src={audioSource}
        autoPlay={true}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </section>
  );
}

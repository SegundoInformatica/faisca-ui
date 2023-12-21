"use client";

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
    <div className="audioBox">
      <div>
        {isPlaying ? (
          <svg
            className="buttons"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 13 18"
            onClick={toggleIsPlaying}
          >
            <path
              d="M2 2L2 16"
              stroke="#5B84E8"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M11 2V16"
              stroke="#5B84E8"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        ) : (
          <svg
            className="buttons"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 14 14"
            onClick={toggleIsPlaying}
          >
            <path d="M1.61723 13.6727C1.34857 13.6723 1.08468 13.6125 0.851494 13.4992C0.32642 13.2466 0 12.7561 0 12.2237V1.44907C0 0.915168 0.32642 0.426222 0.851494 0.173575C1.09023 0.0570732 1.36143 -0.00283783 1.63677 0.000103302C1.9121 0.00304444 2.18144 0.0687299 2.41665 0.190294L13.2616 5.70246C13.4876 5.8228 13.6739 5.9899 13.8031 6.18811C13.9322 6.38632 14 6.60913 14 6.83565C14 7.06218 13.9322 7.28499 13.8031 7.4832C13.6739 7.6814 13.4876 7.84851 13.2616 7.96885L2.4149 13.4825C2.17419 13.6061 1.8985 13.6718 1.61723 13.6727Z" />
          </svg>
        )}
        <p>Ouça o texto</p>
      </div>
      <audio
        src={audioSource}
        autoPlay={true}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <div>
        <progress id="percent-loaded" value="75" max="1000"></progress>
      </div>
    </div>
  );
}

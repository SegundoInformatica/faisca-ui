"use client";

import Image from "next/image";
import "./Audio.css";
import { useEffect, useRef, useState } from "react";

export default function Audio({ audioSource }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleIsPlaying() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(!isPlaying);
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(1, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  useEffect(
    function () {
      function handleTimeUpdate() {
        const currentTime = audioRef.current.currentTime;
        const totalTime = audioRef.current.duration;

        setCurrentTime(currentTime);
        setTotalTime(totalTime);

        progressBarRef.current.value = (currentTime / totalTime) * 100;
      }

      function handleMetadata() {
        const totalTime = audioRef.current.duration;
        setTotalTime(totalTime);
      }

      if (!audioRef.current) {
        return;
      }

      const currentRef = audioRef.current;

      currentRef.addEventListener("timeupdate", handleTimeUpdate);
      currentRef.addEventListener("loadedmetadata", handleMetadata);

      return function () {
        if (currentRef) {
          currentRef.removeEventListener("timeupdate", handleTimeUpdate);
          currentRef.removeEventListener("loadedmetadata", handleMetadata);
        }
      };
    },
    [audioRef, progressBarRef, isPlaying],
  );

  return (
    <section className="audio-box">
      <p className="title">Ouça o texto</p>

      <button className="control" onClick={toggleIsPlaying}>
        {isPlaying ? (
          <Image src="/icons/pause.svg" width={14} height={14} alt="Pause" />
        ) : (
          <Image src="/icons/play.svg" width={14} height={14} alt="Play" />
        )}
      </button>

      <progress ref={progressBarRef} value="0" max="100"></progress>

      <p className="time">
        {formatTime(currentTime)} / {formatTime(totalTime)}
      </p>

      <audio
        src={audioSource}
        autoPlay={false}
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
    </section>
  );
}

"use client";

import "./Audio.css";
import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";

export default function Audio({ audioSource }) {
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [draggingProgress, setDraggingProgress] = useState(false);

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

  useEffect(
    function () {
      if (!progressBarRef.current) {
        return;
      }

      function updateProgressBar(posX) {
        const rect = progressBarRef.current.getBoundingClientRect();
        let clickedX = posX - rect.left;
        clickedX = Math.max(0, Math.min(clickedX, rect.width));

        const newPercent = (clickedX / rect.width) * progressBarRef.current.max;
        progressBarRef.current.value = newPercent;

        audioRef.current.currentTime = (newPercent / 100) * audioRef.current.duration;
      }

      function press(event) {
        event.preventDefault();

        setDraggingProgress(true);

        updateProgressBar(
          "touches" in event ? event.touches[0].clientX : event.clientX,
        );
      }

      function release() {
        setDraggingProgress(false);
      }

      function move(event) {
        if (!draggingProgress) {
          return;
        }

        updateProgressBar(
          "touches" in event ? event.touches[0].clientX : event.clientX,
        );
      }

      const currentRef = progressBarRef.current;

      currentRef.addEventListener("mousedown", press);
      currentRef.addEventListener("touchstart", press);

      document.addEventListener("mouseup", release);
      document.addEventListener("touchend", release);

      document.addEventListener("mousemove", move);
      document.addEventListener("touchmove", move);

      return function () {
        if (currentRef) {
          currentRef.removeEventListener("mousedown", press);
          currentRef.removeEventListener("touchstart", press);
          document.removeEventListener("mouseup", release);
          document.removeEventListener("touchend", release);
          document.removeEventListener("mousemove", move);
          document.removeEventListener("touchmove", move);
        }
      };
    },
    [progressBarRef, draggingProgress],
  );

  return (
    <section className="audio-box">
      <p className="title">Ouça o texto</p>

      <button className="control" onClick={toggleIsPlaying}>
        {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} />}
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

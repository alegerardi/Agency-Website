"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

type AudioPlayerProps = {
  title: string;
  artistName: string;
  audioUrl: string;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) {
    return "0:00";
  }

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function AudioPlayer({
  title,
  artistName,
  audioUrl,
}: AudioPlayerProps) {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const wavesurferRef = useRef<WaveSurfer | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!waveformRef.current) {
      return;
    }

    setIsReady(false);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    const wavesurfer = WaveSurfer.create({
      container: waveformRef.current,
      url: audioUrl,

      height: 96,
      barWidth: 3,
      barGap: 3,
      barRadius: 4,

      waveColor: "rgba(255,255,255,0.35)",
      progressColor: "rgba(255,255,255,0.95)",
      cursorColor: "rgba(255,255,255,0.9)",
      cursorWidth: 2,

      normalize: true,
    });

    wavesurferRef.current = wavesurfer;

    wavesurfer.on("ready", (durationInSeconds) => {
      setDuration(durationInSeconds);
      setIsReady(true);
    });

    wavesurfer.on("timeupdate", (timeInSeconds) => {
      setCurrentTime(timeInSeconds);
    });

    wavesurfer.on("play", () => {
      setIsPlaying(true);
    });

    wavesurfer.on("pause", () => {
      setIsPlaying(false);
    });

    wavesurfer.on("finish", () => {
      setIsPlaying(false);
      setCurrentTime(0);
    });

    return () => {
      wavesurfer.destroy();
      wavesurferRef.current = null;
    };
  }, [audioUrl]);

  function handlePlayPause() {
    if (!wavesurferRef.current || !isReady) {
      return;
    }

    wavesurferRef.current.playPause();
  }

  return (
    <div className="rounded-2xl border border-white/15 bg-black/55 p-5 shadow-2xl backdrop-blur-md">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-black text-white">{title}</h3>
          <p className="mt-1 text-sm text-white/55">{artistName}</p>
        </div>

        <div className="flex items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            {formatTime(currentTime)} / {formatTime(duration)}
          </p>

          <a
            href={audioUrl}
            download
            className="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition hover:bg-white hover:text-black"
          >
            Download
          </a>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={handlePlayPause}
          disabled={!isReady}
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={isPlaying ? "Pause song" : "Play song"}
        >
          <span className="text-2xl font-black">
            {isPlaying ? "Ⅱ" : "▶"}
          </span>
        </button>

        <div className="min-w-0 flex-1">
          {!isReady && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Loading waveform...
            </p>
          )}

          <div ref={waveformRef} className="w-full" />
        </div>
      </div>
    </div>
  );
}
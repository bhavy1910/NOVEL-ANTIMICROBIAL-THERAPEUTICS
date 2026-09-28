import React, { useRef, useState, useEffect } from 'react';
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  RotateCcw,
  ChevronDown,
  ArrowRight,
  Dna,
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  foregroundVideoOpen?: boolean;
  onSetForegroundVideo?: (open: boolean) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplore,
  foregroundVideoOpen,
  onSetForegroundVideo
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Attempt autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
    }
  }, []);

  // When foregroundVideoOpen is triggered from navbar, play and unmute if permitted
  useEffect(() => {
    if (foregroundVideoOpen) {
      const video = videoRef.current;
      if (video) {
        video.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  }, [foregroundVideoOpen]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasInteracted(true);
    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasInteracted(true);
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const handleRestart = () => {
    const video = videoRef.current;
    if (!video) return;
    setHasInteracted(true);
    video.currentTime = 0;
    video.play().catch(() => {});
    setIsPlaying(true);
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;
    if (!document.fullscreenElement) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {
          video.requestFullscreen?.().catch(() => {});
        });
      } else if (video.requestFullscreen) {
        video.requestFullscreen().catch(() => {});
      }
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between items-center bg-slate-950 text-slate-100 pt-20 pb-8 px-4 sm:px-6 lg:px-8"
    >
      {/* Top Banner: Video Title & Team Header */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Dna className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <h1 className="font-display font-bold text-sm sm:text-base text-slate-100 tracking-wide">
                NOVEL ANTIMICROBIAL THERAPEUTICS
              </h1>
            </div>
            <p className="text-xs text-cyan-400 font-mono">
              Presentation Film · Playing in Foreground
            </p>
          </div>
        </div>

        {/* Quick Presenters Pill */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs font-mono text-slate-300">
          <span className="text-cyan-400 font-semibold">Team:</span>
          <span>Krish Panchal · Zeel Desai · Nensi Raytthatha</span>
        </div>
      </div>

      {/* FOREGROUND VIDEO PLAYER: Centerpiece of this section, completely unobstructed */}
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden bg-black border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex items-center justify-center my-auto group"
      >
        {/* Actual Video Element playing in foreground */}
        <video
          ref={videoRef}
          src="/assets/IMG_6365.MP4"
          autoPlay
          muted={isMuted}
          playsInline
          controls
          loop
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onVolumeChange={(e) => setIsMuted(e.currentTarget.muted)}
          className="w-full h-full object-contain bg-black"
        />

        {/* Unmute floating banner if video starts muted */}
        {isMuted && !hasInteracted && (
          <div className="absolute top-4 right-4 pointer-events-auto z-20">
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <VolumeX className="w-4 h-4" />
              <span>CLICK TO UNMUTE AUDIO</span>
            </button>
          </div>
        )}

        {/* Floating Quick Action Overlay buttons on top left */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-auto">
          <button
            onClick={togglePlay}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400 text-xs font-mono transition-colors"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
          </button>
          <button
            onClick={toggleMute}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400 text-xs font-mono transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>
          <button
            onClick={handleRestart}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400 text-xs font-mono transition-colors"
            title="Replay from start"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-cyan-400 text-xs font-mono transition-colors"
            title="Fullscreen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Bottom Bar: Explore Presentation navigation button */}
      <div className="w-full max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 pt-2">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive slide presentation continues below the video</span>
        </div>

        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all cursor-pointer"
        >
          <span>Scroll to explore presentation</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Subtle Scroll Prompt */}
      <button
        onClick={onExplore}
        className="mt-2 text-slate-500 hover:text-cyan-400 transition-colors flex flex-col items-center gap-1 text-[11px] font-mono tracking-widest uppercase cursor-pointer"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
      </button>
    </section>
  );
};

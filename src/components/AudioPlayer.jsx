import { useEffect, useRef, useState } from "react";
import song from "/paruparo.mp3";
import { Pause, Play } from "lucide-react";

function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef();

  useEffect(() => {
    audioRef.current.volume = 0.1;
    audioRef.current.play();
    setIsPlaying(true);
  }, []);

  function togglePlay() {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  }

  return (
    <div>
      <button id="play-btn" onClick={togglePlay}>
        {isPlaying ? <Pause size={50} /> : <Play size={50} />}
      </button>
      <audio ref={audioRef} loop src={song}></audio>
    </div>
  );
}

export default AudioPlayer;

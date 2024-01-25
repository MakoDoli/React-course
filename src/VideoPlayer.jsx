import { useEffect, useRef, useState } from "react";

function VideoPlayer() {
  const [isPlaying, setIsplaying] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) ref.current.pause();
    if (!isPlaying) ref.current.play();
  });

  return (
    <div>
      <button onClick={() => setIsplaying(!isPlaying)}>
        {!isPlaying ? "Pause" : "Play"}
      </button>
      <video
        ref={ref}
        src={
          "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        }
      ></video>
    </div>
  );
}
export default VideoPlayer;

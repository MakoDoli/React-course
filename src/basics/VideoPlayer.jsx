import { useEffect, useRef, useState } from "react";

function VideoPlayer() {
  const [isPlaying, setIsplaying] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (isPlaying) ref.current.pause();
    if (!isPlaying) ref.current.play();
  });
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setCount((prev) => prev + 1);
            console.log(count);
            setCount((prev) => prev + 1);
            console.log(count);
            setCount((prev) => prev + 1);
            console.log(count);
          }}
        >
          click here
        </button>
        <p>Now count is {count}</p>
      </div>
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

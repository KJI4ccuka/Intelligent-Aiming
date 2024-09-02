import ReactPlayer from 'react-player'
import { useEffect, useState } from 'react'

export default function VideoPlayer({ videoUrl })  {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-full rounded-lg overflow-hidden">
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height='100%'
        controls={true}
        playing={false}
        loop={false}
        volume={0.8}
      />
    </div>
  );
};

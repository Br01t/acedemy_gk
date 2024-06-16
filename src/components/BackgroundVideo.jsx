import React, { useRef, useEffect } from 'react';

const BackgroundVideo = ({ videoId }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      video.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;
    }
  }, [videoId]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh', // Altezza della sezione, regola a seconda delle tue esigenze
        overflow: 'hidden',
      }}
    >
      <div
        className="overlay"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // Colore e trasparenza dell'overlay
        }}
      ></div>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="video"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          zIndex: -1,
        }}
      >
        <p>
          Your browser doesn't support HTML5 video. Here is a{' '}
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            link to the video
          </a>{' '}
          instead.
        </p>
      </video>
    </section>
  );
};

export default BackgroundVideo;

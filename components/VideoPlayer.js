const VideoPlayer = () => {
  return (
    <header class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
      <div class="relative z-10 p-5 text-2xl text-white bg-red-300 bg-opacity-50 rounded-xl">
        Contactar
      </div>
      <video
        autoplay
        loop
        muted
        class="absolute w-auto min-w-full min-h-full max-w-none"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default VideoPlayer;

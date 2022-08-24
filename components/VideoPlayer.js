const VideoPlayer = () => {
  return (
    <section
      id="Inicio"
      className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3"
    >
      <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          className="min-w-full min-h-full absolute object-cover"
          src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className="video-content space-y-6 z-10">
        <h1 className="font-light font-hero text-5xl">Lotes de 1000m²</h1>
        <h2 className="font-light font-hero text-3xl ">
          Desde $30.000.000 COP
        </h2>
        <h3 className="font-light font-display text-3xl">
          IDEALES PARA CASA FINCAS
        </h3>
        <button>Contactanos</button>
      </div>
    </section>
  );
};

export default VideoPlayer;

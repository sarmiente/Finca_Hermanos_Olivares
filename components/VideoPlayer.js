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
        <p className="font-display text-xl">Santa Rosa, Bolívar - Colombia</p>

        <h1 className="font-light font-hero text-4xl md:text-7xl lg:text-9xl">
          Lotes de 1000m²
        </h1>
        <h2 className="font-light font-hero text-4xl md:text-7xl lg:text-9xl">
          20 x 50
        </h2>
        <h3 className="font-light font-display text-3xl md:text-4xl text-red-500">
          IDEALES PARA CASA FINCAS
        </h3>
        <h4 className="font-light font-hero text-3xl md:text-4xl">
          Desde $30.000.000 COP
        </h4>

        <button className="hover:scale-110 border-2 p-2 rounded">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default VideoPlayer;

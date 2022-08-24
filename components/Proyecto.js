const pasos = [
  { id: 1, title: 'Lorem', excerpt: 'Lorem' },
  { id: 2, title: 'Lorem', excerpt: 'Lorem' },
  { id: 3, title: 'Lorem', excerpt: 'Lorem' },
  { id: 4, title: 'Lorem', excerpt: 'Lorem' },
];

export default function Proyecto() {
  return (
    <div
      className="xl:mt-14 mt-10 mb-10 py-10 bg-white-500 overflow-hidden"
      id="Proyecto"
    >
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div>
          <span className="w-max mx-auto px-6 text-black-600 mb-10">
            <h2 className=" text-center text-red-500 text-2xl font-bold font-display md:text-3xl">
              ¿Quieres ser parte de Nuestro Proyecto?
            </h2>
          </span>
          <span>
            <h3 className="text-center font-light font-display text-3xl">
              DE CONTADO O FINANCIADO
            </h3>
          </span>
          <h2 className="mt-4 mb-12 text-center text-xl text-black font-bold md:text-4xl">
            Ofrecemos la mejor tecnologia para garantizar una excelente
            <br className="lg:block" hidden /> seguridad y proteccion de tus
            bienes
          </h2>
        </div>
        <div className="mt-16 p-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 md:-mx-8">
          {pasos.map(({ id, title, excerpt }) => (
            <div className="relative group ">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-gray-100 shadow-2xl transition duration-300 group-hover:bg-gradient-to-r from-red-500 to-red-700 group-hover:scale-105 lg:group-hover:scale-110"
              />
              <div className="relative space-y-8 p-4 md:p-8 lg:p-8 xl:p-6 ">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-neutral-500"
                >
                  <span className="font-bold text-black">{id}</span>
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl text-gray-800 font-medium transition group-hover:text-white-500">
                    {title}
                  </h4>
                  <p className="text-gray-600 group-hover:text-white-500">
                    {excerpt}
                  </p>
                </div>
                {/* <Image
              src={Facebook}
              className="w-16"
              width={50}
              height={50}
              alt="burger illustration"
            /> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

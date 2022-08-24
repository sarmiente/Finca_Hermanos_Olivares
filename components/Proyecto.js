const pasos = [
  {
    id: 1,
    title: 'Separación',
    excerpt:
      'Comunicate con nosotros y aparta tu terreno con tan solo $1.000.000.',
  },
  {
    id: 2,
    title: 'Cuota Inicial',
    excerpt: '30% de cuota Inicial del valor total del lote.',
  },
  {
    id: 3,
    title: 'Financiación',
    excerpt: '70% restante en el numero de cuotas de tu preferencia.',
  },
];

export default function Proyecto() {
  return (
    <div
      className="xl:mt-14 mt-5 mb-10 py-8 bg-white-500 overflow-hidden"
      id="Proyecto"
    >
      <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-20">
        <div className="space-y-4">
          <span className="w-max mx-auto px-6 text-black-600 mb-10">
            <h1 className=" text-center text-red-500 text-3xl font-bold font-display md:text-4xl">
              ¿Quieres ser parte de Nuestro Proyecto?
            </h1>
          </span>
          <span></span>
          <h2 className="font-display text-center text-xl text-black md:text-4xl">
            Finca Los Hermanos Olivares, es un proyecto campestre ubicado en el
            municipio de <br className="lg:block" hidden />
            Santa Rosa de Lima, Colombia.
          </h2>
          <h3 className="text-center font-display text-xl md:text-2xl">
            PAGA DE CONTADO O FINANCIADO
          </h3>
        </div>
        <div className="mt-16 p-1 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
          {pasos.map(({ id, title, excerpt }) => (
            <div className="relative group ">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-xl bg-gray-200 shadow-md transition duration-300 group-hover:scale-105 lg:group-hover:scale-105"
              />
              <div className="relative space-y-8 p-5 md:p-8 lg:p-8 xl:p-6 ">
                <div
                  aria-hidden="true"
                  className="w-10 h-10 flex justify-center items-center rounded-full bg-red-600"
                >
                  <span className="font-bold text-white">{id}</span>
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl md:text-3xl font-hero text-black font-medium transition group-hover:text-white-500">
                    {title}
                  </h1>
                  <p className="text-black font-display group-hover:text-white-500 text-lg md:text-xl">
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

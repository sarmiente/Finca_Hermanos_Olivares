import React from 'react';
import Image from 'next/image';

import Facebook from '../../public/assets/Icon/facebook.svg';
import Instagram from '../../public/assets/Icon/instagram.svg';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="mt-28 bg-white-500 pt-10 pb-12">
        <div className=" max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-flow-row m:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-3">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 ">
            <div className="text-2xl font-display">
              Finca{' '}
              <span className="font-display font-bold cursor-pointer text-red-500">
                Hermanos Olivares
              </span>{' '}
            </div>
            <p className="pb-4 font-display">Santa Rosa, Bolivar</p>

            <div className="flex">
              {/*  <Image src={LogoWP} alt="Logo whatsapp" width={30} /> */}
              <p className="pb-4 font-display">
                contacto@fincahermanosolivares.co
              </p>
            </div>

            <div className="flex gap-4 w-full mt-2">
              <div>
                <a
                  href=""
                  className="bg-white-500 rounded-full flex p-2 shadow-lg hover:scale-110"
                >
                  <Image src={Facebook} />
                </a>
              </div>

              <div>
                <a
                  href=""
                  className="bg-white-500 rounded-full flex p-2 shadow-lg hover:scale-110"
                >
                  <Image src={Instagram} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-8 md:col-span-2 lg:col-span-5">
            <div className="mt-4 md:mt-0 md:pl-16 pb-10 grid grid-cols-2 gap-6 sm:grid-cols-2">
              <div>
                <h6 className="text-lg font-medium text-black-600 text-red-500">
                  Menu
                </h6>
                <ul className="list-inside mt-4 space-y-3">
                  <li>
                    <a href="#inicio" className="hover:text-red-500 transition">
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#proyecto"
                      className="hover:text-red-500 transition"
                    >
                      Proyecto
                    </a>
                  </li>
                  <li>
                    <a href="#planos" className="hover:text-red-500 transition">
                      Planos
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://wa.me/573053255769"
                      target="_blank"
                      className="hover:text-red-500 transition"
                    >
                      Contactenos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="text-lg font-medium text-black-600 text-red-500">
                  Links
                </h6>
                <ul className="list-inside mt-4 space-y-4">
                  <li>
                    <a
                      href="/politica"
                      className="hover:text-red-500 transition"
                    >
                      Politica de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="/terms" className="hover:text-red-500 transition">
                      Terminos y condiciones
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:mb-0 flex justify-between px-2 py-3 bg-gray-100 text-black-600 text-sm">
        <span>2022 &copy; Todos los derechos reservados.</span>

        <div>
          <span className="font-hero font-bold transition hover:text-blue-500">
            SARPIN.co
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;

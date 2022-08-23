import React from 'react';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import XIcon from '@heroicons/react/outline/XIcon';
import MenuIcon from '@heroicons/react/outline/MenuIcon';

const links = [
  { name: 'Inicio', to: '#Inicio', id: 1 },
  { name: 'Proyecto', to: '#Proyectos', id: 2 },
  { name: 'Planos', to: '#Planos', id: 3 },
  { name: 'Contacto', to: '#Contacto', id: 4 },
];
const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

export default function Navbar() {
  const [open, cycleOpen] = useCycle(false, true);

  return (
    <nav className="flex justify-between w-full shadow-sm">
      <div className="p-5 text-2xl font-display">
        Finca{' '}
        <span className="font-display font-bold hover:tracking-wide cursor-pointer text-red-500">
          Hermanos Olivares
        </span>{' '}
      </div>
      {/* The Navbar on large screens */}
      <div className="hidden pr-6 lg:inline-flex font-display">
        {links.map(({ name, to, id }) => (
          <a
            key={id}
            href={to}
            className="py-6 px-5 text-xl text-gray-800 transition duration-100 ease-in-out transform  hover:text-red-500 hover:scale-110 hover:font-bold"
          >
            {name}
          </a>
        ))}
      </div>

      {/* The Side Bar Menu for screens smaller than 'Large' */}

      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 200,
            }}
            exit={{
              width: 0,
              transition: { delay: 0.3, duration: 0.3 },
            }}
            className="fixed right-0 bg-transparent h-screen lg:hidden bg-gradient-to-r from-red-500 to-red-700 z-20"
          >
            <motion.div className="flex flex-col my-16">
              {links.map(({ name, to, id }) => (
                <a
                  key={id}
                  href={to}
                  className="mx-10 my-3 text-xl text-white hover:text-black transition duration-100 ease-in-out transform hover:text-white hover:scale-110 hover:font-bold font-display"
                >
                  {name}
                </a>
              ))}
              <div className="absolute bottom-0 mx-10 my-3 font-display">
                <span className="font-display text-white hover:text-black">
                  <a href="https://www.sarpin.co/">SARPIN.CO</a>
                </span>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* The Hamburger Menu and Close Icons */}
      <div className="flex justify-end lg:hidden">
        <button className="px-2 m-5 cursor-pointer" onClick={cycleOpen}>
          <span className="sr-only">Open</span>
          {open ? (
            <XIcon
              className="fixed w-6 h-6 text-black-600 right-7 top-6 z-20"
              aria-hidden="true"
            />
          ) : (
            <MenuIcon className="w-6 h-6 text-black-600" aria-hidden="true" />
          )}
        </button>
      </div>
    </nav>
  );
}

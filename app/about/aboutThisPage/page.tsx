'use client'
import Link from 'next/link';
import Confetti from 'react-confetti';

export default function Page() {
  // Definir las variables de color al principio
  const bgColor = "#cb997e"; // Fondo principal
  const cardContainerColor = "#ddbea9"; // Fondo del contenedor de las tarjetas
  const cardColor = "#ffe8d6"; // Fondo de las tarjetas

  const [width, height] = [window.innerWidth, window.innerHeight];

  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center p-8"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="p-10 rounded-xl shadow-lg max-w-4xl w-full text-center"
        style={{ backgroundColor: cardContainerColor }}
      >
        <h1 className="text-4xl font-bold text-black mb-6">
          🎉 Welcome to Our Project 🎉
        </h1>
        <Confetti width={width} height={height} recycle={false} />
        <p className="text-lg text-black mb-8">
          This web application is an university project, developed using modern technologies to provide an optimal user experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: cardColor }}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">Next.js</h2>
            <p className="text-lg text-black">
              A powerful React framework that allows server-side rendering and static site generation. It’s fast, scalable, and developer-friendly.
            </p>
          </div>

          <div
            className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: cardColor }}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">React.js</h2>
            <p className="text-lg text-black">
              A JavaScript library for building interactive UIs. React enables efficient updates and rendering of dynamic content.
            </p>
          </div>

          <div
            className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: cardColor }}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">Tailwind CSS</h2>
            <p className="text-lg text-black">
              A utility-first CSS framework for building custom designs quickly. Tailwind gives you full control over the styling.
            </p>
          </div>

          <div
            className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: cardColor }}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">SQL</h2>
            <p className="text-lg text-black">
              SQL is used for managing and querying the database to store and retrieve data in an efficient manner.
            </p>
          </div>

          <div
            className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            style={{ backgroundColor: cardColor }}
          >
            <h2 className="text-2xl font-semibold text-black mb-4">Vercel</h2>
            <p className="text-lg text-black">
              A platform for seamless deployment and hosting of Next.js applications with automatic scaling.
            </p>
          </div>

          {/* Nueva card con enlace */}
          <div
  className="text-black p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
  style={{ backgroundColor: cardColor }}
>
  <Link href="/home">
    <div className="flex flex-col items-center justify-center h-full text-center cursor-pointer">
      <h2 className="text-2xl font-semibold text-black mb-4">Back to the page</h2>
    </div>
  </Link>
</div>
        </div>
      </div>
    </div>
  );
}

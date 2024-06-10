'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4E1]">
      <Image
        src="/404.png" // Asegúrate de tener una imagen 404 en la carpeta public/images
        alt="Page Not Found"
        width={500}
        height={500}
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page not found.</h1>
      <p className="text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <button
        onClick={() => router.push('/')}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default GlobalError;

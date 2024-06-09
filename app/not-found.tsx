// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Image
        src="/premiere_books/premiere1.jpg" // Asegúrate de tener una imagen 404 en la carpeta public/images
        alt="Page Not Found"
        width={500}
        height={500}
      />
      <h1 className="text-4xl font-bold text-gray-800">Oops! Page not found.</h1>
      <p className="text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link href="/">
        <a className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Go Home
        </a>
      </Link>
    </div>
  );
}

// app/not-found.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F4E1]">
      <Image
        src="/404.png" // Asegúrate de tener una imagen 404 en la carpeta public/images
        alt="Page Not Found"
        width={500}
        height={500}
      />
      <h1 className="text-4xl font-bold text-gray-800">Page not found.</h1>
      <p className="text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
      <Link className="text font-bold text-gray-800" href="/">
        
        Click here to go Home!
        
      </Link>
    </div>
  );
}

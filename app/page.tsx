import TopNav from '@/app/ui/topnav';
import Carrusel from '@/app/ui/carrusel';

export default function Home() {
  return (
    <div>
      <TopNav />
      <div className="mt-[15%]">
        <Carrusel />
      </div>
    </div>
  );
}


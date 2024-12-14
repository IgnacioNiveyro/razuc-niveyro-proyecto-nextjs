import TopNav from '@/app/ui/topnav';
import Footer from '../ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <TopNav />
      <div className="pt-44">{children}</div> 
      <div className='mb-0'><Footer/></div>
    </div>
  );
}

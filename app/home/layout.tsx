import TopNav from '@/app/ui/topnav';
import Footer from '../ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <TopNav />
      </div>
      <div>{children}</div>
      <div className='pt-8 mb-0'><Footer/></div>
    </div>
  );
}
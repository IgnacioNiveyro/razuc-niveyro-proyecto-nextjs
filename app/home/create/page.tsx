import Form from '@/app/ui/create-form';
import { printear } from '@/app/lib/actions';
import Breadcrumbs from '@/app/ui/breadcrumbs';
export default async function Page() {
  const test = await printear();
  return (
    <main>
        <Breadcrumbs
        breadcrumbs={[
          { label: 'Books', href: '/home' },
          {
            label: 'Create Book',
            href: '/home/create',
            
          },
          {
            label: 'Edit Book',
            href: '/home/pick-book',
            
          },
        ]}
      />
      <Form />
    </main>
  );
}
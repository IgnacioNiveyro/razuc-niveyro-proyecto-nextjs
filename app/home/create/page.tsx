import Form from '@/app/ui/create-form';
import Breadcrumbs from '@/app/ui/breadcrumbs';
export default async function Page() {
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
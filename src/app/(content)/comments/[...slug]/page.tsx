import { allComments } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx-components';
import Breadcrumb from '@/components/bread-crumb';
import Toc from '@/components/toc';

type tParams = Promise<{ slug: string[] }>;

export const generateStaticParams = async () => {
  return allComments.map((doc) => {
    const slugArray = doc.slug.split('/');
    return { slug: slugArray };
  });
};

export const generateMetadata = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  const path = awaitedParams.slug.join('/');
  const doc = allComments.find((doc) => doc.slug === path);

  if (!doc) throw new Error(`Comment not found for slug: ${path}`);

  return {
    title: doc.title,
    description: doc.description || 'A detailed guide to the topic.',
    openGraph: {
      title: doc.title,
      description: doc.description || 'A detailed guide to the topic.',
    },
  };
};

const CommentPage = async ({ params }: { params: tParams }) => {
  const awaitedParams = await params;
  const path = awaitedParams.slug.join('/');
  const doc = allComments.find((doc) => doc.slug === path);

  if (!doc) notFound();

  return (
    <div className={`grid xl:grid xl:grid-cols-[1fr_270px]`}>
      <article className="overflow-auto">
        <div className="mb-8 text-center">
          <Breadcrumb path={doc.url} />
        </div>
        <Mdx code={doc.body.code} />
      </article>

      <Toc doc={doc} />
    </div>
  );
};

export default CommentPage;

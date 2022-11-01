import { fetchSubCategory, PageProps } from '@/lib/getCategories';
import { SkeletonCard } from '@/ui/SkeletonCard';

export default async function Page({ params }: PageProps) {
  // const category = await fetchSubCategory(
  //   params.categorySlug,
  //   params.subCategorySlug,
  // );
  // if (!category) return null;
  const joke = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  }).then((res) => res.json());
  return (
    <div>
      <h1>Dad Jokes</h1>
      <p>{joke.joke}</p>
    </div>
  );
}

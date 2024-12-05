import ResultContainer from "@/components/result-container";
import { getNews } from "@/lib/action";

export default async function Home(props: {
  searchParams: Promise<{
    query?: string
    category?: string
  }>
}) {
  const searchParams = await props.searchParams
  const { query, category } = searchParams
  const articles = await getNews({ category, query });
  return (
    <main className="max-w-screen-xl mx-auto py-10 max-sm:px-3 px-4">
      <ResultContainer
        articles={articles}
      />
    </main>
  );
}

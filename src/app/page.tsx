import { getPictureToday } from "@/lib/controller";
import SingleImageData from "@/components/SingleImageData";

export default async function Home() {
  const picture = await getPictureToday();
  
  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen p-6 md:p-12">
      <h1 className="text-2xl font-bold">{picture?.title}</h1>
      <SingleImageData picture={picture} />
    </main>
  )
}

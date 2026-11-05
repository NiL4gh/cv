import { getActiveCv } from "@/lib/cvs";
import { TopNav } from "@/components/top-nav";
import { CvViewer } from "@/components/cv-viewer";

export const dynamic = "force-static";

export default function HomePage() {
  const activeCv = getActiveCv();

  return (
    <main className="min-h-screen bg-neutral-50 dark:bg-neutral-950 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <TopNav activeCvId={activeCv.id} cvTitle={activeCv.title} />
      <CvViewer cv={activeCv} />
    </main>
  );
}

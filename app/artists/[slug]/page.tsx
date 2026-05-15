import ArtistBioSection from "@/components/ArtistBioSection";
import ArtistGallery from "@/components/ArtistGallery";
import ArtistSongsHero from "@/components/ArtistSongsHero";
import SiteHeader from "@/components/SiteHeader";
import StudioInfoSection from "@/components/StudioInfoSection";
import { artists } from "@/data/artists";
import { notFound } from "next/navigation";

type ArtistSinglePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.slug,
  }));
}

export async function generateMetadata({ params }: ArtistSinglePageProps) {
  const { slug } = await params;

  const artist = artists.find((artist) => artist.slug === slug);

  return {
    title: artist
      ? `${artist.name} | Meritocracy Demos Platform`
      : "Artist Not Found | Meritocracy Demos Platform",
    description: artist
      ? artist.bio
      : "Artist page not found.",
  };
}

export default async function ArtistSinglePage({
  params,
}: ArtistSinglePageProps) {
  const { slug } = await params;

  const artist = artists.find((artist) => artist.slug === slug);

  if (!artist) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />

      <ArtistSongsHero artist={artist} />

      <ArtistBioSection artist={artist} />

      <ArtistGallery artist={artist} />

      <StudioInfoSection />
    </main>
  );
}
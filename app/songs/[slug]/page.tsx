import ArtistBioSection from "@/components/ArtistBioSection";
import ArtistGallery from "@/components/ArtistGallery";
import SingleSongHero from "@/components/SingleSongHero";
import SiteHeader from "@/components/SiteHeader";
import StudioInfoSection from "@/components/StudioInfoSection";
import { artists } from "@/data/artists";
import { notFound } from "next/navigation";

type SongSinglePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getAllSongsWithArtists() {
  return artists.flatMap((artist) =>
    artist.songs.map((song) => ({
      song,
      artist,
    }))
  );
}

export function generateStaticParams() {
  return getAllSongsWithArtists().map(({ song }) => ({
    slug: song.slug,
  }));
}

export async function generateMetadata({ params }: SongSinglePageProps) {
  const { slug } = await params;

  const match = getAllSongsWithArtists().find(
    ({ song }) => song.slug === slug
  );

  return {
    title: match
      ? `${match.song.title} by ${match.artist.name} | Meritocracy Demos Platform`
      : "Song Not Found | Meritocracy Demos Platform",
    description: match
      ? `Listen to ${match.song.title} by ${match.artist.name}.`
      : "Song page not found.",
  };
}

export default async function SongSinglePage({
  params,
}: SongSinglePageProps) {
  const { slug } = await params;

  const match = getAllSongsWithArtists().find(
    ({ song }) => song.slug === slug
  );

  if (!match) {
    notFound();
  }

  const { song, artist } = match;

  return (
    <main className="min-h-screen bg-black">
      <SiteHeader />

      <SingleSongHero artist={artist} song={song} />

      <ArtistBioSection artist={artist} />

      <ArtistGallery artist={artist} />

      <StudioInfoSection />
    </main>
  );
}
import Link from "next/link";
import type { Artist } from "@/data/artists";

type ArtistStatsProps = {
  artist: Artist;
};

export default function ArtistStats({ artist }: ArtistStatsProps) {
  return (
    <Link
      href={`/artists/${artist.slug}`}
      className="block rounded-xl border border-gray-700 bg-gray-900 p-4 transition hover:bg-gray-800"
    >
      <img
        src={artist.main_image}
        alt={artist.name}
        className="mb-4 h-48 w-full rounded-lg object-cover"
      />

      <h2 className="text-xl font-bold text-white">{artist.name}</h2>
      <p className="text-sm text-gray-400">{artist.genre}</p>
      <p className="mt-2 text-sm text-gray-300">
        {artist.songs.length} song(s) available
      </p>
    </Link>
  );
}
import ArtistStats from "@/components/ArtistStats";
import { artists } from "@/data/artists";

export default function ArtistsPage() {
  return (
    <main className="min-h-screen bg-black px-8 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">Artists</h1>

        <p className="mt-2 text-gray-400">
          Browse all artists available on the platform.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistStats key={artist.slug} artist={artist} />
          ))}
        </div>
      </section>
    </main>
  );
}
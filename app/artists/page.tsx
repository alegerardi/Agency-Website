import ArtistStats from "@/components/ArtistStats";
import { artists } from "@/data/artists";
import { studioInfo } from "@/data/studio";

export default function ArtistsPage() {
  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center px-8 py-12 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/60">
          Meritocracy Roster
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase tracking-wide">
          Artists
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Browse all artists available on the platform.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artists.map((artist) => (
            <ArtistStats key={artist.slug} artist={artist} />
          ))}
        </div>
      </section>
    </main>
  );
}
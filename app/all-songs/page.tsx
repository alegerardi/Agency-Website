import AudioPlayer from "@/components/AudioPlayer";
import { artists } from "@/data/artists";
import { studioInfo } from "@/data/studio";
import Link from "next/link";

export default function AllSongsPage() {
  const allSongs = artists.flatMap((artist) =>
    artist.songs.map((song) => ({
      ...song,
      artistName: artist.name,
      artistSlug: artist.slug,
    }))
  );

  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center px-8 py-12 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <section className="mx-auto max-w-6xl">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/60">
          Full Demo Library
        </p>

        <h1 className="mt-4 text-5xl font-black uppercase tracking-wide">
          All Songs
        </h1>

        <p className="mt-4 max-w-2xl text-white/70">
          Stream all demos available on the platform.
        </p>

        <div className="mt-10 grid gap-6">
          {allSongs.map((song) => (
            <div key={`${song.artistName}-${song.slug}`} className="space-y-4">
              <AudioPlayer
                title={song.title}
                artistName={song.artistName}
                audioUrl={song.audioUrl}
              />

              <Link
                href={`/songs/${song.slug}`}
                className="inline-block rounded-full border border-white/30 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/70 transition hover:bg-white hover:text-black"
              >
                Open Song Page
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
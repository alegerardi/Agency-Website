import AudioPlayer from "@/components/AudioPlayer";
import { artists } from "@/data/artists";

export default function AllSongsPage() {
  const allSongs = artists.flatMap((artist) =>
    artist.songs.map((song) => ({
      ...song,
      artistName: artist.name,
    }))
  );

  return (
    <main className="min-h-screen bg-black px-8 py-12 text-white">
      <section className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-bold">All Songs</h1>

        <p className="mt-2 text-gray-400">
          Stream all demos available on the platform.
        </p>

        <div className="mt-8 grid gap-4">
          {allSongs.map((song) => (
            <AudioPlayer
              key={`${song.artistName}-${song.title}`}
              title={song.title}
              artistName={song.artistName}
              audioUrl={song.audioUrl}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
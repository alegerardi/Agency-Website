import type { Artist } from "@/data/artists";
import { studioInfo } from "@/data/studio";
import AudioPlayer from "@/components/AudioPlayer";

type ArtistSongsHeroProps = {
  artist: Artist;
};

export default function ArtistSongsHero({ artist }: ArtistSongsHeroProps) {
  return (
    <section
      className="relative min-h-[650px] bg-black bg-cover bg-center px-8 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="text-3xl font-black uppercase tracking-[0.25em] md:text-5xl">
          {artist.name}
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
          Available Demos
        </p>

        <div className="mt-12 grid w-full max-w-3xl gap-6">
          {artist.songs.map((song, index) => (
            <div key={`${song.title}-${index}`} className="text-left">
              <p className="mb-3 text-center text-xl font-black uppercase tracking-[0.2em] md:text-2xl">
                {song.title}
              </p>

              <AudioPlayer
                title={song.title}
                artistName={artist.name}
                audioUrl={song.audioUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
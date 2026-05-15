import AudioPlayer from "@/components/AudioPlayer";
import type { Artist, Song } from "@/data/artists";
import { studioInfo } from "@/data/studio";

type SingleSongHeroProps = {
  artist: Artist;
  song: Song;
};

export default function SingleSongHero({ artist, song }: SingleSongHeroProps) {
  return (
    <section
      className="relative min-h-[650px] bg-black bg-cover bg-center px-8 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.35)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="text-sm font-bold uppercase tracking-[0.35em] text-white/70">
          Exclusive Demo
        </p>

        <h1 className="mt-6 text-3xl font-black uppercase tracking-[0.2em] md:text-5xl">
          {song.title}
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/60">
          {artist.name}
        </p>

        <div className="mt-12 w-full max-w-3xl text-left">
          <AudioPlayer
            title={song.title}
            artistName={artist.name}
            audioUrl={song.audioUrl}
          />
        </div>
      </div>
    </section>
  );
}
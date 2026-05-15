import ArtistSocialLinks from "@/components/ArtistSocialLinks";
import type { Artist } from "@/data/artists";

type ArtistBioSectionProps = {
  artist: Artist;
};

export default function ArtistBioSection({ artist }: ArtistBioSectionProps) {
  return (
    <section id="artist-bio" className="bg-black px-8 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
            Artist Bio
          </p>

          <h2 className="mt-4 text-4xl font-black uppercase tracking-wide md:text-6xl">
            {artist.name}
          </h2>

          <p className="mt-3 text-lg font-semibold uppercase tracking-[0.2em] text-white/60">
            {artist.genre}
          </p>

          <p className="mt-8 max-w-xl text-base leading-8 text-white/75">
            {artist.bio}
          </p>

          <ArtistSocialLinks socialLinks={artist.social_links} />

          <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black">{artist.songs.length}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                Songs
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black">—</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                Followers
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-black">—</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/50">
                Streams
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-white/5 blur-2xl" />

          <img
            src={artist.main_image}
            alt={artist.name}
            className="relative h-[520px] w-full rounded-[2rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
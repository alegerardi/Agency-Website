import type { Artist } from "@/data/artists";

type ArtistGalleryProps = {
  artist: Artist;
};

export default function ArtistGallery({ artist }: ArtistGalleryProps) {
  if (!artist.gallery_image || artist.gallery_image.length === 0) {
    return null;
  }

  return (
    <section className="bg-black px-8 pb-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
            Gallery
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase tracking-wide md:text-5xl">
            Artist Photos
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {artist.gallery_image.map((imageUrl, index) => (
            <div
              key={`${artist.slug}-gallery-${index}`}
              className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
            >
              <img
                src={imageUrl}
                alt={`${artist.name} photo ${index + 1}`}
                className="h-[360px] w-full object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
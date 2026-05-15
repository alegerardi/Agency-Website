import Link from "next/link";
import { artists } from "@/data/artists";
import { studioInfo } from "@/data/studio";

export default function HomePage() {
  const artistCount = artists.length;

  const demoCount = artists.reduce((total, artist) => {
    return total + artist.songs.length;
  }, 0);

  return (
    <main
      className="min-h-screen bg-black bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.85)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-8 py-24 text-center">
        <img
          src={studioInfo.logoImage}
          alt={studioInfo.name}
          className="mb-10 h-24 w-auto object-contain md:h-32"
        />

        <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-white/60">
          Artist Demo Platform
        </p>

        <h1 className="max-w-4xl text-5xl font-black uppercase tracking-wide md:text-7xl">
          Meritocracy Demos Platform
        </h1>

        <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 md:text-lg">
          {studioInfo.description}
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/artists"
            className="rounded-full bg-white px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-black transition hover:bg-white/80"
          >
            View Artists
          </Link>

          <Link
            href="/all-songs"
            className="rounded-full border border-white/40 px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
          >
            All Songs
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-4xl gap-6 border-t border-white/10 pt-10 md:grid-cols-3">
          <div>
            <p className="text-3xl font-black">{artistCount}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Artists
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">{demoCount}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Demos
            </p>
          </div>

          <div>
            <p className="text-3xl font-black">24/7</p>
            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-white/50">
              Label Access
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
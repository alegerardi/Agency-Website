import { studioInfo } from "@/data/studio";

export default function StudioInfoSection() {
  return (
    <section
      id="studio-info"
      className="bg-black bg-cover bg-center px-8 py-24 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.65)), url(${studioInfo.backgroundImage})`,
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Photos
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {studioInfo.photos.map((photo, index) => (
                <div
                  key={`studio-photo-${index}`}
                  className="overflow-hidden border border-white/10 bg-white/5"
                >
                  <img
                    src={photo}
                    alt={`${studioInfo.name} photo ${index + 1}`}
                    className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>

            <p className="mt-12 text-sm font-black uppercase tracking-[0.25em] text-white">
              {studioInfo.email}
            </p>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/50">
              Who We Are
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase tracking-wide md:text-5xl">
              {studioInfo.name}
            </h2>

            <p className="mt-8 max-w-2xl text-base uppercase leading-8 tracking-[0.12em] text-white/75">
              {studioInfo.description}
            </p>

            <div className="mt-12 text-sm font-black uppercase tracking-[0.25em] text-white">
              <a
                href={`https://${studioInfo.website}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white/70"
              >
                {studioInfo.website}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
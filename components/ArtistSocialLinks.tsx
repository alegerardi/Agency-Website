import type { SocialLinks } from "@/data/artists";

type SocialPlatform = {
  key: keyof SocialLinks;
  label: string;
  icon: string;
};

const socialPlatforms: SocialPlatform[] = [
  {
    key: "spotify",
    label: "Spotify",
    icon: "/images/logos/spotify.png",
  },
  {
    key: "instagram",
    label: "Instagram",
    icon: "/images/logos/instagram.png",
  },
  {
    key: "soundcloud",
    label: "SoundCloud",
    icon: "/images/logos/soundcloud.png",
  },
  {
    key: "facebook",
    label: "Facebook",
    icon: "/images/logos/facebooklogo.png",
  },
  {
    key: "youtube",
    label: "YouTube",
    icon: "/images/logos/youtube.png",
  },
];

type ArtistSocialLinksProps = {
  socialLinks: SocialLinks;
};

export default function ArtistSocialLinks({
  socialLinks,
}: ArtistSocialLinksProps) {
  const availableLinks = socialPlatforms.filter((platform) => {
    return socialLinks[platform.key]?.trim() !== "";
  });

  if (availableLinks.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-white/50">
        Social Media
      </p>

      <div className="flex flex-wrap items-center gap-4">
        {availableLinks.map((platform) => (
          <a
            key={platform.key}
            href={socialLinks[platform.key]}
            target="_blank"
            rel="noreferrer"
            aria-label={platform.label}
            title={platform.label}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 transition hover:scale-110 hover:bg-white/20"
          >
            <img
              src={platform.icon}
              alt={platform.label}
              className="h-7 w-7 object-contain"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
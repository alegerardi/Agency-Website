export type StudioInfo = {
  name: string;
  email: string;
  website: string;
  description: string;
  logoImage: string;
  backgroundImage: string;
  photos: string[];
};

export const studioInfo: StudioInfo = {
  name: "Head Studios",

  email: "info@headmusicstudios.com",

  website: "www.headmusicstudios.com",

  logoImage: "/images/IMG_headlogo.png",

  backgroundImage: "/images/backgrounds/artist-page-bg.jpg",

  description:
    "Head Studios is a professional studio based in Turin. We offer a range of services and the opportunity to work with a team of musicians, sound engineers, managers, as well as videographers, graphic designers, social media experts, and other professionals. Our studio supports artists in every stage of their musical career, all within the same professional environment.",

  photos: [
    "/images/studio/1.jpg",
    "/images/studio/2.jpg",
    "/images/studio/3.jpg",
    "/images/studio/4.jpg",
    "/images/studio/5.jpg",
  ],
};
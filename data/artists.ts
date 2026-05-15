//This part is where we store each artist


export type Song = {
  title: string;
  slug: string;
  audioUrl: string;
};

export type SocialLinks = {
  spotify: string;
  instagram: string;
  soundcloud: string;
  facebook: string;
  youtube: string;
};

export type Artist = {
  name: string;
  slug: string;
  genre: string;
  main_image: string;
  gallery_image: string[];
  bio: string;
  social_links: SocialLinks;
  songs: Song[];
};

export const artists: Artist[] = [
  {
    name: "Ale Gerardi",
    slug: "alegerardi",
    genre: "House / Techno ",
    main_image: "/images/artists/alegerardi/IMG_main.jpg",
    gallery_image: ["/images/artists/alegerardi/IMG_main.jpg","/images/artists/alegerardi/IMG_2.jpg","/images/artists/alegerardi/IMG_3.jpg"],
    social_links: {
      spotify: "https://open.spotify.com/",
      instagram: "https://www.instagram.com/alegerardi.sounds/",
      soundcloud: "https://soundcloud.com/alessandro-filho-3",
      facebook: "https://www.facebook.com/",
      youtube: "",
    },
    bio: "Electronic music enthusiast Ale Gerardi promises to deliver always very memorable tracks, collecting elements from the underground scene and adding its own touch with dancing melodies, unpredictable elements and arranges! Also with a project dedicated to Hard Techno, aka STRVTN, the brazilian artist portrays its own mix, made out of a collection of influences taken worldwide",
    songs: [
      {
        title: "No Cortisol",
        slug: "no_cortisol_ale_gerardi",
        audioUrl: "/songs/alegerardi/No Cortisol - Ale Gerardi.mp3",
      },
      {
        title: "Back On The Boulevard",
        slug: "back_on_the_boulevard_ale_gerardi",
        audioUrl: "/songs/alegerardi/Back On The Boulevard (Original Mix).mp3",
      },
      {
        title: "Don't Think About It",
        slug: "no_cortisol_ale_gerardi",
        audioUrl: "/songs/alegerardi/Black Loops - Dont Think Bout It.mp3",
      },
      {
        title: "Higher",
        slug: "no_cortisol_ale_gerardi",
        audioUrl: "/songs/alegerardi/Black Loops - Higher.mp3",
      },
    ],
  },

  {
    name: "Luca Testa",
    slug: "lucatesta",
    genre: "House / Techno",
    main_image: "/images/artists/lucatesta/IMG_main.jpg",
    social_links: {
      spotify: "https://open.spotify.com/artist/0Dzj2bn9ivDSjvJVSKL4q7?si=oeRa3eMXQiu9ZeDmmWf3dA",
      instagram: "https://www.instagram.com/lucatestamusic/",
      soundcloud: "https://soundcloud.com/lucatestamusic",
      facebook: "https://www.facebook.com/",
      youtube: "",
    },
    gallery_image: ["/images/artists/lucatesta/IMG_main.jpg","/images/artists/lucatesta/IMG_2.jpeg", "/images/artists/lucatesta/IMG_3.jpeg"],
    bio: "Luca Testa is an Italian DJ and electronic music producer from Turin, recognized for his high-energy sound that blends electro, progressive house, and festival-ready dance music. A lifelong music enthusiast with a background in piano and sound engineering, Luca has built an international career through releases on major labels including Spinnin’ Records, Revealed Recordings, Armada Music, Dim Mak, Smash The House, and more.",
    songs: [
      {
        title: "Are You Ready Again",
        slug: "are_you_ready_again_luca_testa",
        audioUrl: "/songs/lucatesta/Are You Ready Again - Luca Testa.mp3"
      },

      {
        title: "Metropolis",
        slug: "metropolis_luca_testa",
        audioUrl: "/songs/lucatesta/Metropolis - Luca Testa.mp3"

      },

    ],



  },


];
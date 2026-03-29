export const SITE = {
  website: "https://www.wrappedupinsongs.com", // replace this with your deployed domain
  author: "Nic Guest-Jelley",
  profile: "https://nicguestjelley.com",
  desc: "A songwriter's search for why the songs he loves matter to him.",
  title: "Wrapped Up in Songs",
  heroTitle: "Getting lost in songs worth getting lost in.",
  heroDescription: "I've been playing and writing music for thirty years, but I've never stopped to ask why certain songs invite returning back to time and again. This blog investigates how certain songs I love work, one song at a time. If you're looking for my music, you can find it on <a href='https://nicguestjelley.bandcamp.com'>BandCamp</a>",
  ogImage: "wrapped-og.png",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/nicrocs/wrapped-up-in-songs/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "America/Los_Angeles", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

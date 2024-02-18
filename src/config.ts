import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://github.com/malothebault/blog-malo", // replace this with your deployed domain
  author: "Malo Thebault",
  desc: "Mon coin d'internet",
  title: "Paumé et Pétillant",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "fr", // html lang code. Set this empty and default will be "en"
  langTag: ["fr-FR"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/malothebault",
    linkTitle: ` ${SITE.title} sur Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/m_thblt",
    linkTitle: `${SITE.title} sur Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Twitter`,
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Twitch`,
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/malothebault",
    linkTitle: `${SITE.title} sur Mastodon`,
    active: false,
  },
  {
    name: "RSS",
    href: "/rss.xml",
    linkTitle: `${SITE.title} sur RSS`,
    active: true,
  },
];

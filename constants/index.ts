export interface SectionLink {
  section: string;
  text?: string;
  image?: string;
}

export const sectionLinks: SectionLink[] = [
  {
    section: "#hero",
    text: "Hero",
  },
  {
    section: "#about",
    text: "About",
  },
  {
    section: "#projects",
    text: "Projects",
  },
  {
    section: "#contact",
    text: "Contact",
  },
];

export type Experience = {
  thumbnailTitle: string;
  thumbnailImage: string;
  experienceCategory: "postproduction" | "evenementiel" | "composition";
  experienceType: "professionelle" | "personnelle" | "scolaire";
  title: string;
  description: string;
  competences?: string[];
  liensYoutube?: string[];
  images: string[];
  createdAt: string;
  updatedAt: string;
};

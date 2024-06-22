export type Experience = {
  _id: string;
  thumbnailTitle: string;
  thumbnailImage: string;
  experienceCategory: "postproduction" | "evenementiel" | "composition";
  experienceType: "professionelle" | "personnelle" | "scolaire";
  title: string;
  description: string;
  competences?: string[];
  liensYoutube?: string[];
  images: {
    url: string;
  }[];
  createdAt: string;
  updatedAt: string;
};

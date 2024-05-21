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
export const experiencesDummyData: Experience[] = [
  {
    thumbnailTitle: "Experience 1",
    thumbnailImage: "image1.jpg",
    experienceCategory: "postproduction",
    experienceType: "professionelle",
    title: "Experience 1 Title",
    description: "Experience 1 Description",
    competences: ["Competence 1", "Competence 2"],
    liensYoutube: ["youtube.com/video1", "youtube.com/video2"],
    images: ["image1.jpg", "image2.jpg"],
    createdAt: "2021-01-01",
    updatedAt: "2021-01-02",
  },
  {
    thumbnailTitle: "Experience 2",
    thumbnailImage: "image2.jpg",
    experienceCategory: "evenementiel",
    experienceType: "personnelle",
    title: "Experience 2 Title",
    description: "Experience 2 Description",
    competences: ["Competence 3", "Competence 4"],
    liensYoutube: ["youtube.com/video3", "youtube.com/video4"],
    images: ["image3.jpg", "image4.jpg"],
    createdAt: "2021-02-01",
    updatedAt: "2021-02-02",
  },
  {
    thumbnailTitle: "Experience 3",
    thumbnailImage: "image3.jpg",
    experienceCategory: "composition",
    experienceType: "scolaire",
    title: "Experience 3 Title",
    description: "Experience 3 Description",
    competences: ["Competence 5", "Competence 6"],
    liensYoutube: ["youtube.com/video5", "youtube.com/video6"],
    images: ["image5.jpg", "image6.jpg"],
    createdAt: "2021-03-01",
    updatedAt: "2021-03-02",
  },
  {
    thumbnailTitle: "Experience 4",
    thumbnailImage: "image4.jpg",
    experienceCategory: "postproduction",
    experienceType: "professionelle",
    title: "Experience 4 Title",
    description: "Experience 4 Description",
    competences: ["Competence 7", "Competence 8"],
    liensYoutube: ["youtube.com/video7", "youtube.com/video8"],
    images: ["image7.jpg", "image8.jpg"],
    createdAt: "2021-04-01",
    updatedAt: "2021-04-02",
  },
  {
    thumbnailTitle: "Experience 5",
    thumbnailImage: "image5.jpg",
    experienceCategory: "evenementiel",
    experienceType: "personnelle",
    title: "Experience 5 Title",
    description: "Experience 5 Description",
    competences: ["Competence 9", "Competence 10"],
    liensYoutube: ["youtube.com/video9", "youtube.com/video10"],
    images: ["image9.jpg", "image10.jpg"],
    createdAt: "2021-05-01",
    updatedAt: "2021-05-02",
  },
  {
    thumbnailTitle: "Experience 6",
    thumbnailImage: "image6.jpg",
    experienceCategory: "composition",
    experienceType: "scolaire",
    title: "Experience 6 Title",
    description: "Experience 6 Description",
    competences: ["Competence 11", "Competence 12"],
    liensYoutube: ["youtube.com/video11", "youtube.com/video12"],
    images: ["image11.jpg", "image12.jpg"],
    createdAt: "2021-06-01",
    updatedAt: "2021-06-02",
  },
  {
    thumbnailTitle: "Experience 7",
    thumbnailImage: "image7.jpg",
    experienceCategory: "postproduction",
    experienceType: "professionelle",
    title: "Experience 7 Title",
    description: "Experience 7 Description",
    competences: ["Competence 13", "Competence 14"],
    liensYoutube: ["youtube.com/video13", "youtube.com/video14"],
    images: ["image13.jpg", "image14.jpg"],
    createdAt: "2021-07-01",
    updatedAt: "2021-07-02",
  },
];

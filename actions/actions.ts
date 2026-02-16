"use server";

import { prisma } from "@/lib/prisma";
import { Experience } from "@/types";

type ExperienceImage = Experience["images"][number];

function toExperience(record: {
  id: string;
  thumbnailTitle: string;
  thumbnailImage: string;
  experienceCategory: string;
  experienceType: string;
  title: string;
  description: string;
  competences: string[];
  liensYoutube: string[];
  images: unknown[];
  createdAt: Date;
  updatedAt: Date;
}): Experience {
  return {
    _id: record.id,
    thumbnailTitle: record.thumbnailTitle,
    thumbnailImage: record.thumbnailImage,
    experienceCategory: record.experienceCategory as Experience["experienceCategory"],
    experienceType: record.experienceType as Experience["experienceType"],
    title: record.title,
    description: record.description,
    competences: record.competences,
    liensYoutube: record.liensYoutube,
    images: record.images as ExperienceImage[],
    createdAt: record.createdAt.toISOString(),
    updatedAt: record.updatedAt.toISOString(),
  };
}

export async function fetchExperiences() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { createdAt: "desc" },
    });

    return experiences.map(toExperience);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchExperience(experienceId: string) {
  try {
    const experience = await prisma.experience.findUnique({
      where: { id: experienceId },
    });

    if (!experience) {
      return null;
    }

    return toExperience(experience);
  } catch (error) {
    console.error(error);
    return null;
  }
}

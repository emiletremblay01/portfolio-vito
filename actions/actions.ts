"use server";

import {
  connectDB,
  ExperienceModel,
  toExperience,
  toExperienceList,
} from "@/lib/mongodb";

export async function fetchExperiences() {
  try {
    await connectDB();
    const docs = await ExperienceModel.find()
      .sort({ updatedAt: -1 })
      .exec();
    return toExperienceList(docs);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchExperience(experienceId: string) {
  try {
    await connectDB();
    const doc = await ExperienceModel.findById(experienceId).exec();
    return toExperience(doc);
  } catch (error) {
    console.error(error);
    return null;
  }
}

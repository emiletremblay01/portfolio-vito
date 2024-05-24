"use server";
import { Experience } from "@/types";
import axios from "axios";

export async function fetchExperiences() {
  try {
    const res = await axios({
      method: "post",
      url: `${process.env.MONGO_API_URL}/action/find`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGO_API_KEY,
      },
      data: JSON.stringify({
        dataSource: "Cluster0",
        database: "PortfolioVitoDB",
        collection: "Experience",
        filter: {},
      }),
    });
    const experiences: Experience[] = res.data.documents;
    return experiences;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function fetchExperience(experienceId: string) {
  try {
    const res = await axios({
      method: "post",
      url: `${process.env.MONGO_API_URL}/action/findOne`,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Request-Headers": "*",
        "api-key": process.env.MONGO_API_KEY,
      },
      data: JSON.stringify({
        dataSource: "Cluster0",
        database: "PortfolioVitoDB",
        collection: "Experience",
        filter: {
          _id: experienceId,
        },
      }),
    });
    const experience: Experience = res.data.documents;
    return experience;
  } catch (error) {
    console.error(error);
    return null;
  }
}

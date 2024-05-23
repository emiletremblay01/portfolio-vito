"use server";
import axios from "axios";

export async function getExperiences() {
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

    return res.data.documents;
  } catch (error) {
    console.error(error);
    return error;
  }
}

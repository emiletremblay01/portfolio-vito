import mongoose from "mongoose";
import { Experience } from "@/types";

function getMongoUri(): string {
  const uri = process.env.DATABASE_URL || process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Please set DATABASE_URL or MONGODB_URI in .env");
  }
  return uri;
}

const globalForMongoose = globalThis as unknown as {
  mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
};

let cached = globalForMongoose.mongoose;
if (!cached) {
  cached = globalForMongoose.mongoose = { conn: null, promise: null };
}

export async function connectDB(): Promise<typeof mongoose> {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(getMongoUri());
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Mongoose schema for the Experience collection
const imageSchema = new mongoose.Schema(
  { url: { type: String, required: true } },
  { _id: false }
);

const experienceSchema = new mongoose.Schema<Experience>(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    thumbnailTitle: { type: String, required: true },
    thumbnailImage: { type: String, required: true },
    experienceCategory: { type: String, required: true },
    experienceType: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    competences: { type: [String], default: [] },
    liensYoutube: { type: [String], default: [] },
    images: { type: [imageSchema], default: [] },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
  },
  { collection: "Experience", timestamps: false }
);

export const ExperienceModel =
  mongoose.models.Experience as mongoose.Model<Experience> ||
  mongoose.model<Experience>("Experience", experienceSchema);

/** Map Mongoose doc to app Experience type (_id and dates as strings) */
export function toExperience(
  doc: mongoose.Document | null
): Experience | null {
  if (!doc) return null;
  const obj = doc.toObject();
  return {
    ...obj,
    _id: (obj._id as mongoose.Types.ObjectId).toString(),
    createdAt: (obj.createdAt as Date).toISOString(),
    updatedAt: (obj.updatedAt as Date).toISOString(),
  };
}

/** Map Mongoose docs to Experience[] */
export function toExperienceList(
  docs: mongoose.Document[]
): Experience[] {
  return docs.map((doc) => {
    const obj = doc.toObject();
    return {
      ...obj,
      _id: (obj._id as mongoose.Types.ObjectId).toString(),
      createdAt: (obj.createdAt as Date).toISOString(),
      updatedAt: (obj.updatedAt as Date).toISOString(),
    };
  }) as Experience[];
}

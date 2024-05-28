"use client";

import ExperienceCard from "@/components/experienceCard";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import { useGetExperiences } from "@/actions/client/useGetExperiences";
import { useSearchParams } from "next/navigation";
const variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const ExperiencesContainer = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();
  const selectedExperienceType = searchParams.get("experience");

  const { data: experiences, isLoading, isError } = useGetExperiences();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.error("Error while fetching experiences");
    return <div>Error...</div>;
  }

  if (!experiences) {
    return <div>No experiences found</div>;
  }

  const filteredExperiences = experiences.filter(
    (experience) => experience.experienceCategory === pathname.split("/")[1],
  );
  return (
    <>
      {filteredExperiences && (
        <motion.ul
          id="experiences-container"
          variants={variants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 top-0 grid w-full grid-cols-2 flex-wrap gap-1 min-[470px]:grid-cols-3 sm:flex sm:gap-2"
        >
          {selectedExperienceType === "all"
            ? filteredExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.thumbnailTitle}
                  className="sm:size-44 lg:size-60"
                  experience={experience}
                />
              ))
            : filteredExperiences
                .filter(
                  (experience) =>
                    experience.experienceType === selectedExperienceType,
                )
                .map((experience) => (
                  <ExperienceCard
                    key={experience.thumbnailTitle}
                    className="sm:size-44"
                    experience={experience}
                  />
                ))}
        </motion.ul>
      )}
    </>
  );
};

export default ExperiencesContainer;

"use client";

import { motion } from "framer-motion";

import ExperienceCard from "@/components/experienceCard";
import { Experience } from "@/types";

const variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const ExperiencesContainer = ({
  experiences,
}: {
  experiences: Experience[] | null;
}) => {
  return (
    <>
      {experiences && (
        <motion.ul
          id="experiences-container"
          variants={variants}
          initial="hidden"
          animate="visible"
          className="absolute left-0 top-0 grid w-full grid-cols-2 flex-wrap gap-1 min-[470px]:grid-cols-3 sm:flex sm:gap-2"
        >
          {experiences.map((experience) => (
            <ExperienceCard
              key={experience.thumbnailTitle}
              className="sm:size-44"
              title={experience.thumbnailTitle}
            />
          ))}
        </motion.ul>
      )}
    </>
  );
};

export default ExperiencesContainer;

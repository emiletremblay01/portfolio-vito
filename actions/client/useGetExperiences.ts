import { fetchExperiences, fetchExperience } from "@/actions/actions";
import { useQuery } from "@tanstack/react-query";

export function useGetExperiences() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: async () => fetchExperiences(),
  });
}

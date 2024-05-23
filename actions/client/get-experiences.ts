import { useQuery, useMutation } from "@tanstack/react-query";
import { fetchExperiences } from "@/actions/actions";

export function useGetExperiences() {
  const ans = useQuery({
    queryKey: ["experiences"],
    queryFn: async () => fetchExperiences,
  });

  if (ans.error) {
    console.error(ans.error);
  }
  return ans;
}

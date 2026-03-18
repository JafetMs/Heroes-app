import { useQuery } from "@tanstack/react-query";
import { getSummmaryAction } from "../actions/get-summary.action";

export const useHeroSummary = () => {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummmaryAction,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  
};

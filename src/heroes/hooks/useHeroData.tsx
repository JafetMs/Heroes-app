import { useQuery } from "@tanstack/react-query";   
import { getHeroData } from "../actions/get-hero-data.action";

export const useHeroData = (idSlug: string) =>{

    return useQuery({
        queryKey : ["heroes", idSlug],
        queryFn: () => getHeroData(idSlug),
        retry:false
        
    })
}
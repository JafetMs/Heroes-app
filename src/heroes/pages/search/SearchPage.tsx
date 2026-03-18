import { CustomJumboTron } from "@/components/custom/CustomJumboTron";
import { HeroStats } from "@/heroes/components/HeroStats";
import { SearchControls } from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { searchHeroesAction } from "@/heroes/actions/search-hero.action";
import { HeroGrid } from "@/heroes/components/HeroGrid";

export const SearchPage = () => {

  // TODO: useQuery

  const [searchParams] =useSearchParams();

  const name = searchParams.get('name') ?? undefined;
  const strength = searchParams.get('strength') ?? undefined;

  const { data : heroes = []} = useQuery({
    queryKey:['search',{name, strength}],
    queryFn:() => searchHeroesAction({name,strength} ),
    staleTime: 1000 * 60 * 4
  });
 
  return (
    <>
      <CustomJumboTron
        title="Superhero Search"
        description="Discover, explore and mange your favorite superheores and villains"
      />

              <CustomBreadcrumbs currentPage="Search characters"
              breadcumbs={
                [
                  // {label:'Home',to:'/'},
                  // {label:'Home2',to:'/'},
                  // {label:'Home3',to:'/'},
                ]
              }
              
              />
      

      {/* Stats Dashboard */}
      <HeroStats />

    {/* Filter and search */}
    <SearchControls/>

    <HeroGrid heroes={heroes}/>
    </>
  );
};

export default SearchPage;

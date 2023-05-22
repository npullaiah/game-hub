import UseData from "./useData";
export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => UseData<Genre>("/genres");

export default useGenres;

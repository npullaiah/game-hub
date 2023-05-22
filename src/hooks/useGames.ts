import { useEffect, useState } from "react";
import apiClient from "../assets/services/api-client";
import { CanceledError } from "axios";
import UseData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => UseData<Game>("/games");

export default useGames;

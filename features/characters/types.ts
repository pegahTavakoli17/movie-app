import { PageInfo } from "@/types/api";

export type CharacterStatus = "Alive" | "Dead" | "unknown";

export type Character = {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
};

export type characterResponse = {
  info: PageInfo;
  results: Character[];
};

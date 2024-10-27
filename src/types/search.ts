export interface Sport {
  name: string;
  gender: string;
  season: string;
}

export interface BasePlayer {
  id: string;
  name: string;
  team: string;
  sport: string;
}

export interface Player extends BasePlayer {
  position?: string;
  imageUrl?: string;
  stats?: {
    [key: string]: string | number;
  };
}

export interface Team {
  id: string;
  name: string;
  sport: string;
}
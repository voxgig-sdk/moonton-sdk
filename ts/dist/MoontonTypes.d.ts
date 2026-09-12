export interface Game {
    active?: boolean;
    description?: string;
    genre: string;
    id: string;
    name: string;
    platforms?: any[];
    playerCount?: number;
    releaseDate?: string;
}
export interface GameListMatch {
    limit?: number;
    offset?: number;
}

import { MoontonEntityBase } from '../MoontonEntityBase';
import type { MoontonSDK } from '../MoontonSDK';
import type { Control } from '../types';
import type { Game, GameListMatch } from '../MoontonTypes';
declare class GameEntity extends MoontonEntityBase<Game> {
    constructor(client: MoontonSDK, entopts: any);
    make(this: GameEntity): GameEntity;
    list(this: any, reqmatch?: GameListMatch, ctrl?: Control): Promise<GameEntity[]>;
}
export { GameEntity };

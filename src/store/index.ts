import React from 'react';
import gamesActions, { IGamesActions } from './games/actions';
import { gamesStore, IGamesStore } from './games/store';
import leaderboardsActions, { ILeaderboardsActions } from './leaderboards/actions';
import { ILeaderboardsStore, leaderboardsStore } from './leaderboards/store';
import tournamentsActions, { ITournamentsActions } from './tournaments/actions';
import { ITournamentsStore, tournamentsStore } from './tournaments/store';
import userActions, { IUserActions } from './user/actions';
import { authStore, IAuthStore, IUserStore, userStore } from './user/store';

export interface IErrorsStore {
  [key: string]: string[];
}

export interface IActions {
  games: IGamesActions;
  leaderboards: ILeaderboardsActions;
  tournaments: ITournamentsActions;
  user: IUserActions;
}

export interface IStore {
  actions: IActions;
  auth: IAuthStore;
  games: IGamesStore;
  leaderboards: ILeaderboardsStore;
  tournaments: ITournamentsStore;
  user: IUserStore;
}

const store: IStore = {
  actions: {
    games: gamesActions,
    leaderboards: leaderboardsActions,
    tournaments: tournamentsActions,
    user: userActions
  },
  auth: authStore,
  games: gamesStore,
  leaderboards: leaderboardsStore,
  tournaments: tournamentsStore,
  user: userStore
};

const { Provider, Consumer } = React.createContext(store);
export { store, Provider, Consumer };

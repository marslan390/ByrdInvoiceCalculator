import { Action } from '@ngrx/store';

export enum GlobalActionTypes {
    AddLoadingBar = '[Global] Set Loading Bar Add',
    RemoveLoadingBar = '[Global] Set Loading Bar Remove'
}

export class AddLoadingBar implements Action {
  readonly type = GlobalActionTypes.AddLoadingBar;
}

export class RemoveLoadingBar implements Action {
    readonly type = GlobalActionTypes.RemoveLoadingBar;
  }

export type GlobalAction = AddLoadingBar | RemoveLoadingBar;
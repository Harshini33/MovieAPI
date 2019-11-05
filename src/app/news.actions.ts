import { Action, props } from '@ngrx/store';

export enum NewsActionsTypes {
    Load = '[NEWS PAGE] LOAD NEWS',
    LoadSuccess = '[NEWS PAGE] LOAD NEWS SUCCESS',
    LoadError = '[NEWS PAGE] LOAD NEWS ERROR',
  }
  
  export class LoadNews implements Action {
    readonly type = NewsActionsTypes.Load;
  }
  
  export class LoadNewsSuccess implements Action {
    readonly type = NewsActionsTypes.LoadSuccess;
    constructor(public payload: {title: string, image:string, Type:string,year:string, imdbId: string}) {}
  }
  
  export class LoadNewsError implements Action {
    readonly type = NewsActionsTypes.LoadError;
    constructor(public error: any) {}
  }
  export type NewsActions = LoadNews | LoadNewsSuccess | LoadNewsError
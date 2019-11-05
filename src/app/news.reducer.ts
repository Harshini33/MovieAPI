import {News, createDefaultNews} from './news.model';
import {NewsActions, NewsActionsTypes} from './news.actions';
import {onLoadableError, onLoadableLoad, onLoadableSuccess} from './loadable';

export function newsReducer(state: News = createDefaultNews(), action: NewsActions): News {
    switch (action.type) {
      case NewsActionsTypes.Load:
        return onLoadableLoad(state);
      case NewsActionsTypes.LoadSuccess:
          console.log(action.payload);
        return {
          ...onLoadableSuccess(state),
          title: action.payload.title,
          image: action.payload.image,
          Type : action.payload.Type,
          year: action.payload.year,
          imdbId: action.payload.imdbId
        };
      case NewsActionsTypes.LoadError:
        return onLoadableError(state, action.error);
      default:
        return state;
    }
  }
import {
  GET_NEWS_ARTICLES,
  SET_CURRENT_ARTICLES,
  TOGGLE_ARTICLE_FAVORITE
} from '../actions/news'

const initialState = {
  articles: [],
  currentArticleKey: null,
  favorites: []
}

const toggleArticleFavoriteState = (favorites, key) => {
  const keyInArray = favorites.indexOf(key)
  if (keyInArray !== -1) {
    return [...(favorites.filter(articleKey => articleKey !== key))]
  } else {
    return [...favorites, key]
  }
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        articles: action.payload.articles
      }
    case SET_CURRENT_ARTICLES:
      return {
        ...state,
        currentArticleKey: action.payload.key
      }
    case TOGGLE_ARTICLE_FAVORITE:
      return {
        ...state,
        favorites: toggleArticleFavoriteState(state.favorites, action.payload.key)
      }
    default:
      return state;
  }
}
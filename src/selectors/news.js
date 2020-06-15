import { createSelector } from 'reselect'

const currentArticleKeySelector = state => state.news.currentArticleKey
const articlesSelector = state => state.news.articles

export const currentArticle = createSelector(
  currentArticleKeySelector,
  articlesSelector,
  (key, articles) => Object.assign(...(articles.filter(article => article.key === key)))
)

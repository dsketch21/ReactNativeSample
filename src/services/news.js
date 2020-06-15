import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://newsapi.org/v2/',
  headers: { 'X-Api-Key': '835e6822420b4df088d3efd4037d6f03' }
})

export const getNewsArticles = async () => {
  const { data: { articles } } = await axiosInstance.get('top-headlines?country=us')
  return articles.map(article => ({ ...article, key: `${article.title}-${article.publishedAt}` }))
}
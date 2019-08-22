import useSWR from 'swr'
import { getArticle } from 'views/Blog/hooks/getArticle'
import { ArticleDataType } from 'views/Blog/utils/transformArticle'

interface SearchBarArticle {
  isFetching: boolean
  articlesData: ArticleDataType[]
}

const useSearchBarArticle = (searchKey: string): SearchBarArticle => {
  const { data: articlesData, isLoading } = useSWR(searchKey && [`/searchBarArticles`, searchKey], async () => {
    const result = await getArticle({
      url: '/articles',
      urlParamsObject: {
        ...(searchKey && { _q: searchKey }),
}

export default useSearchBarArticle

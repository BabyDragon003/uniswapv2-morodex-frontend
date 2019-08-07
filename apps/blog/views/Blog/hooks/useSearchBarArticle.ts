import useSWR from 'swr'
import { getArticle } from 'views/Blog/hooks/getArticle'
import { ArticleDataType } from 'views/Blog/utils/transformArticle'

interface SearchBarArticle {
  isFetching: boolean
  articlesData: ArticleDataType[]
}

const useSearchBarArticle = (searchKey: string): SearchBarArticle => {
      },
    })

    return result.data
  })

  return {
    isFetching: isLoading,
    articlesData: articlesData ?? [],
  }
}

export default useSearchBarArticle

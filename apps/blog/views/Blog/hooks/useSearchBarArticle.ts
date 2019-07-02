import useSWR from 'swr'
import { getArticle } from 'views/Blog/hooks/getArticle'
import { ArticleDataType } from 'views/Blog/utils/transformArticle'

interface SearchBarArticle {
    const result = await getArticle({
      url: '/articles',
      urlParamsObject: {
        ...(searchKey && { _q: searchKey }),
        locale: 'all',
        populate: 'categories,image',
        sort: 'createAt:desc',
        pagination: {
          limit: 10,
        },
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

import { fetchAPI } from 'views/Blog/utils/api'
import { ResponseArticleType, ResponseArticleDataType, ResponseCategoriesType, Categories } from 'views/Blog/types'
import { transformArticle, ArticleType, ArticleDataType } from 'views/Blog/utils/transformArticle'

interface GetArticleProps {
  url: string
  urlParamsObject?: Record<string, any>
}

export const getArticle = async ({ url, urlParamsObject = {} }: GetArticleProps): Promise<ArticleType> => {
  try {
    const response: ResponseArticleType = await fetchAPI(url, urlParamsObject)
    return {
      data: response.data.map((i: ResponseArticleDataType) => transformArticle(i)) ?? [],
      pagination: { ...response.meta.pagination },
    }
  } catch (error) {
    console.error('[ERROR] Fetching Article', error)
    return {
      data: [],
      content: '',
      createAt: '',
      publishedAt: '',
      description: '',
      categories: [],
    }
  }
}

export const getCategories = async (): Promise<Categories[]> => {
  try {
    const response = await fetchAPI('/categories', {
      fields: 'id,name',
    })

    return (response.data as ResponseCategoriesType[]).map((category) => ({
      id: category.id,
      name: category.attributes.name,
    }))
  } catch (error) {
    console.error('[ERROR] Fetching Categories', error)
    return []
  }
}

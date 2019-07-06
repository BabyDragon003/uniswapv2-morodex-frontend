export interface CategoriesType {
  id: number
  attributes: {
    name: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export interface ArticleImageType {
  id: number
  attributes: {
    url: string
    formats: {
      medium: {
        url: string
      }
      small: {
        url: string
      }
      thumbnail: {
        url: string
      }
    }
}

export interface ResponseArticleType {
  data: ResponseArticleDataType[]
  meta: {
    pagination: PaginationType
  }
}

export interface ResponseCategoriesType {
  id: number
  attributes: {
    name: string
  }
}

export interface Categories {
  id: number
  name: string
}

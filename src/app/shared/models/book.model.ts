export interface Book{
  title: string
  subtitle: string
  isbn13: string
  price: string
  image: string
  url: string
}

export interface BookResponse{
  books: Array<Book>,
}

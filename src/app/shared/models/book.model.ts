export interface Book{
  title: string
  subtitle: string
  isbn13: number
  price: string
  image: string
  url: string
}

export interface BookResponse{
  books: Array<Book>,
}





export interface SingleBook {
  error: string
  title: string
  subtitle: string
  authors: string
  publisher: string
  language: string
  isbn10: string
  isbn13: string
  pages: string
  year: string
  rating: string
  desc: string
  price: string
  image: string
  url: string
  pdf: Pdf
}

export interface Pdf {
  "Chapter 2": string
  "Chapter 5": string
}

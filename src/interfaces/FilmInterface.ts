export default interface Film {
  id: number
  title: string
  director: string
  producer: string
  opening_crawl: string
  release_date: Date
}

export type Films = Film[]

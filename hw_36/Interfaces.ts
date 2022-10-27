type Genre = 'Sci-Fi'
   | 'Adventure'
   | 'Drama'
   | 'Fantasy'
   | 'Action'
   | 'Family'
type Actors = "Scarlett Johansson"
   | "Florence Pugh"
   | "David Harbour"
   | "Daniel Radcliffe"
   | "Emma Watson"
   | "Rupert Grint"
   | "Mark Hamill"
   | "Harrison Ford"
   | "Carrie Fisher"
   | "Richard Harris"
interface Film {
   id?: number
   title: string
   year: number
   released: string
   runtime: string
   genre: Genre[]
   director: string
   writer: string
   actors: Actors[]
   plot: string
   country: string
   poster: string
   imdbRating: number
   imdbVotes: number
   type?: string
   boxOffice: string
   production: string
}
export { Film, Actors, Genre }
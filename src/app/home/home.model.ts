import { Concert } from "../shared/models/concert.mode"

export interface HomeApiResponse {

    concerts: Concert[]
    genres: Genre[]
    success: boolean
}

export interface Genre {
    id: number
    name: string
    status: boolean

}


export interface Concert {
    id: number
    title: string
    description: string
    place: string
    unitPrice: number
    genre: string
    genreId: number
    dateEvent: string
    timeEvent: string
    imageUrl: string
    finalized: boolean
    ticketsQuantity: number
    status: string
}

export const emptyConcert: Concert = {
    id: 0,
    title: "",
    description: "",
    place: "",
    unitPrice: 0,
    genre: "",
    genreId: 0,
    dateEvent: "",
    timeEvent: "",
    imageUrl: "",
    finalized: false,
    ticketsQuantity: 0,
    status: "",
}
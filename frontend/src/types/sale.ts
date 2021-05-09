import { Seller } from "./seller"

export type Sale = {
    id: number,
    visited: number,
    deals: number,
    amount: number,
    date: string,
    seller: Seller

}

export type SalePage = {
    content?: Sale[],
    first: boolean,
    last: boolean,
    totalPages: number,
    totalElements: number
    number: number,
    numberOfElements?: number,
    empty?: boolean
    size?: number,
}

export type SaleSum = {
    sellerName: string,
    sum: number
}

export type SaleSuccess = {
    sellerName: string,
    visited: number,
    deals: number
}
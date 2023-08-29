import qs from "query-string"

import { ProductType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`

type QueryType = {
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatured?: boolean
}

export const getProducts = async (query: QueryType): Promise<ProductType[]> => {
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })

    const res = await fetch(URL)

    if (!res.ok) {
        throw new Error("Something went wrong")
    } else {
        const data = await res.json()

        return data
    }
}
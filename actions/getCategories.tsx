import { CategoryType } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`

export const getCategories = async (): Promise<CategoryType[]> => {
    const res = await fetch(URL)

    if (!res.ok) {
        throw new Error("Something went wrong")
    } else {
        const data = await res.json()

        return data
    }
}
export type BillboardType = {
    id: string
    label: string
    imageUrl: string
}

export type CategoryType = {
    id: string
    name: string
    billboard: BillboardType
}

export type ProductType = {
    id: string
    category: CategoryType
    name: string
    price: number
    isFeatured: boolean
    size: SizeType
    color: ColorType
    images: ImageType[]
}

export type ImageType = {
    id: string
    url: string
}

export type SizeType = {
    id: string
    name: string
    value: string
}

export type ColorType = {
    id: string
    name: string
    value: string
}
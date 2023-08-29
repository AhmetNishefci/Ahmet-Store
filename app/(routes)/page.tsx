import { Billboard } from "@/components/billboard"
import { Container } from "@/components/ui/container"

import { getBillboard } from "@/actions/getBillboard"
import { getProducts } from "@/actions/getProducts"
import { ProductList } from "@/components/productList"

export const revalidate = 0

 const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("4b7b22c5-dab2-4bc4-9155-b129c201bd4e")
    return (
        <Container>
      <div className="space-y-10 pb-10">
        <Billboard 
          data={billboard}
        />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
    )
}

export default HomePage
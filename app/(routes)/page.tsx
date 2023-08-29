import { Billboard } from "@/components/billboard"
import { Container } from "@/components/ui/container"

import { getBillboard } from "@/actions/getBillboard"
import { getProducts } from "@/actions/getProducts"
import { ProductList } from "@/components/productList"

export const revalidate = 0

 const HomePage = async () => {
    const products = await getProducts({isFeatured: true})
    const billboard = await getBillboard("1105f633-525e-4443-8f03-999990b3e39a")
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
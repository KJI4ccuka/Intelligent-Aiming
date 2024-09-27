import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import ProductRow from '@/components/shared/products/products-row'

const SubscriptionList = ({ products, onProductSelect }) => {
	const [selectedProductId, setSelectedProductId] = useState(products[0].id)
	
	const handleSelectProduct = (product) => {
		setSelectedProductId(product.id)
		onProductSelect(product)
	}
	
	return (
		<ScrollArea className="flex flex-1 w-full border-b">
			<Card>
				<CardContent className="p-0 border-b">
					<Table>
						<TableBody className="flex flex-col cursor-pointer">
							{products.map((product, index) => (
								<ProductRow
									key={index}
									item={product}
									isSelected={product.id === selectedProductId}
									onSelect={() => handleSelectProduct(product)}
								/>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</ScrollArea>
	)
}

export default SubscriptionList

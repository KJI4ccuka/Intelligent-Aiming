import { useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import ProductRow from '@/components/shared/products/products-row'

const SubscriptionList = ({ products, onProductSelect }) => {
	const [selectedProductId, setSelectedProductId] = useState(products[0].id)
	
	const handleSelectProduct = (id) => {
		setSelectedProductId(id)
		const selectedProduct = products.find(product => product.id === id)
		onProductSelect(selectedProduct) // Передаем выбранный продукт в родительский компонент
	}
	
	return (
		<ScrollArea className="flex flex-1 w-full border-b">
			<Card>
				<CardContent className={'p-0 border-b'}>
					<Table>
						<TableBody className={'flex flex-col cursor-pointer'}>
							{products.map((item, index) => (
								<ProductRow
									key={index}
									item={item}
									isSelected={item.id === selectedProductId}
									onSelect={() => handleSelectProduct(item.id)}
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

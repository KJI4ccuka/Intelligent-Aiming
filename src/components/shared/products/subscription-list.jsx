import { ScrollArea } from '@/components/ui/scroll-area'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody } from '@/components/ui/table'
import ProductRow from '@/components/shared/products/products-row'

const SubscriptionList = ({ products }) => {
	
	return (
		<ScrollArea className="flex flex-1 w-full border-b">
			<Card>
				<CardContent className={'p-0 border-b'}>
					<Table>
						<TableBody className={'flex flex-col cursor-pointer'}>
							{products.map((item, index) => (
								<ProductRow key={index} item={item} />
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</ScrollArea>
	)
}

export default SubscriptionList
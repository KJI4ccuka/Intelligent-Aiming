import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { CircleHelp } from 'lucide-react'

const ProductDescription = ({ pay, product }) => {
	
	
	return (
		<div
			className={'bg-background-01 flex flex-col justify-between backdrop-blur rounded-xl border-2 p-4'}
		>
			<Tabs defaultValue={'Purchase'}>
				<div className={'flex justify-between mb-4'}>
					<TabsList className={'bg-background-02 h-full'}>
						<TabsTrigger className={'text-[16px] font-normal'} value="Purchase">Purchase</TabsTrigger>
						<TabsTrigger className={'text-[16px] font-normal'} value="Upgrades">Available upgrades</TabsTrigger>
					</TabsList>
					<Button
						variant="glowing"
						className="rounded-lg font-light tracking-wide text-sm px-5 py-4 flex items-center"
					>
						<CircleHelp className="xs:block mr-2 h-5 w-5" />
						Get help
					</Button>
				</div>
				
				<TabsContent value="Purchase">
					<div className="flex gap-7 border-border bg-background-02/10 border rounded-lg p-2.5">
						{product.purchase_options.map((item, index) => (
							<div key={index}
							     className={'py-4 px-16 flex flex-col items-center rounded-lg font-light bg-background-02'}>
								<div className={''}>{item.title}</div>
								<div>10€</div>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value="Upgrades">
					<div className="flex gap-7 border-border bg-background-02/10 border rounded-lg p-2.5">
						{product.upgrades_available.map((item, index) => (
							<div key={index}
							     className={'py-4 px-16 flex flex-col items-center rounded-lg font-light bg-background-02'}>
								{item.title}
								<div>10€</div>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default ProductDescription
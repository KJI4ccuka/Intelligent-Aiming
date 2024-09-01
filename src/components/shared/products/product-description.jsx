import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { CircleHelp } from 'lucide-react'

const ProductDescription = ({ product }) => {
	
	
	return (
		<div
			className={'bg-background-01 p-2.5 m-2 flex flex-col justify-between backdrop-blur rounded-xl border-2 lg:p-4 lg:m-4'}
		>
			<Tabs defaultValue={'Purchase'}>
				<div className={'flex justify-between mb-2 lg:mb-4'}>
					<TabsList className={'bg-background-02 h-full'}>
						<TabsTrigger className={'text-xs font-normal lg:text-[16px]'} value="Purchase">Purchase</TabsTrigger>
						<TabsTrigger className={'text-xs font-normal lg:text-[16px]'} value="Upgrades">Available upgrades</TabsTrigger>
					</TabsList>
					<Button
						variant="glowing"
						className="rounded-lg font-light tracking-wide text-xs h-auto px-2 py-2 flex items-center"
					>
						<CircleHelp className="xs:block mr-2 h-4 w-4" />
						Get help
					</Button>
				</div>
				
				<TabsContent value="Purchase">
					<div className="flex justify-between p-2 gap-2.5 border-border bg-background-02/10 border rounded-lg lg:gap-3 lg:p-2.5">
						{product.purchase_options.map((item, index) => (
							<div key={index}
							     className={'py-2 w-1/3 flex flex-col items-center rounded-lg bg-background-02 lg:py-2'}>
								<div>10€</div>
								<span className={'text-xs font-light'}>{item.title}</span>
							</div>
						))}
					</div>
				</TabsContent>
				<TabsContent value="Upgrades">
					<div className="flex justify-between p-2 gap-2.5 border-border bg-background-02/10 border rounded-lg lg:gap-3 lg:p-2.5">
						{product.upgrades_available.map((item, index) => (
							<div key={index}
							     className={'py-2 w-1/2 flex flex-col items-center rounded-lg bg-background-02 lg:py-2'}>
								<div>10€</div>
								<span className={'text-xs font-light'}>	{item.title}</span>
							</div>
						))}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default ProductDescription
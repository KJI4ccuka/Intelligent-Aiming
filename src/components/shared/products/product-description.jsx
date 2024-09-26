import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { ArrowDownToLine, CopyPlus, Euro } from 'lucide-react'

const ProductDescription = ({ product }) => {
	
	
	return (
		<div
			className={'bg-background-01 h-44 p-2.5 m-2 flex h flex-col justify-between backdrop-blur rounded-xl border-2 lg:p-4 lg:m-4'}
		>
			<Tabs defaultValue={'Purchase'}>
				<div className={'flex justify-between mb-2 lg:mb-4'}>
					<TabsList className={'bg-background-02 h-8 lg:h-10'}>
						<TabsTrigger className={'text-xs py-0 px-1.5  font-normal lg:px-3 lg:py-1 lg:text-[16px]'} value="Purchase">
							<Euro className={'w-4 mr-1'} />{product.sub_active > 0 ? 'Extend Subscription' : 'Purchase'}
						</TabsTrigger>
						<TabsTrigger
							className={'text-xs py-0 px-1.5 font-normal lg:px-3 lg:py-1 lg:text-[16px]'} value="Upgrades">
							<CopyPlus className={'w-3.5 mr-1'} />Available upgrades
						</TabsTrigger>
					</TabsList>
					{product.sub_active > 0 && <Button
						variant="glowing"
						className="rounded-lg font-light tracking-wide text-xs h-7 px-2 py-1.5 flex items-center lg:h-10 lg:py-2 lg:text-sm lg:px-4"
					>
						<ArrowDownToLine className="xs:block mr-1.5 h-3.5 w-3.5" />
						Load Cheat
					</Button>}
				</div>
				
				<TabsContent value="Purchase">
					<div
						className="flex justify-between p-2 gap-2.5 border-border bg-background-02/10 border rounded-lg lg:gap-3 lg:p-2.5">
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
					<div
						className="flex  h-20 items-center justify-center p-2 gap-2.5 border-border bg-background-02/10 border rounded-lg lg:gap-3 lg:p-2.5"
					>
						{product.upgrades_available.length > 0 ? product.upgrades_available.map((item, index) => (
							<div key={index}
							     className={'py-2 w-1/2 flex flex-col items-center rounded-lg bg-background-02 lg:py-2'}>
								<div>10€</div>
								<span className={'text-xs font-light'}>{item.title}</span>
							</div>
						)) : <span className={''}>No upgrades are currently available for your account</span>}
					</div>
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default ProductDescription
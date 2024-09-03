import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DiscordButton from '@/components/ui/discord-button'
import SubscriptionList from '@/components/shared/products/subscription-list'

const LeftSideBar = ({ products }) => {
	return (
		<div className={'w-1/4 bg-background-01 flex flex-col justify-between backdrop-blur'}>
			<div>
				<div className={'bg-background-01 p-2.5 border-b w-full flex justify-between items-center lg:p-3.5'}>
					<span className={'text-xs font-semibold lg:text-xl'}>Available Subscriptions:</span>
				</div>
				<SubscriptionList products={products} />
			</div>
			
			<Card className={'m-2 bg-background-02 border lg:m-4'} x-chunk="dashboard-02-chunk-0">
				<CardHeader className="p-2 lg:p-4 lg:pb-1">
					<CardTitle className={'text-sm mt-1 lg:text-xl'}>Contact us:</CardTitle>
					<CardDescription className={'w-full text-[10px] font-light lg:text-sm lg:w-[75%]'}>
						Unlock all features and get unlimited access to our support team
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2 pt-1 lg:p-4">
					<Button variant={'glowing'} className={'text-xs mb-2 w-full lg:mb-4 lg:text-sm'}>
						Visit our site
					</Button>
					<DiscordButton classnameSvg={'20'} className={'text-xs mx-0 p-2.5 lg:text-sm'} />
				</CardContent>
			</Card>
		</div>
	)
}

export default LeftSideBar
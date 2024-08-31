import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import DiscordButton from '@/components/ui/discord-button'
import SubscriptionList from '@/components/shared/products/subscription-list'

const LeftSideBar = ({ products }) => {
	return (
		<div className={'min-w-[25%] bg-background-01 min-h-screen flex flex-col justify-between backdrop-blur'}>
			<div>
				<div className={'bg-background-01 p-3.5 border-b w-full flex justify-between items-center'}>
					<span className={'text-sm font-semibold xl:text-xl'}>Available Subscriptions:</span>
				</div>
				<SubscriptionList products={products} />
			</div>
			
			<Card className={'m-4 bg-background-02 border'} x-chunk="dashboard-02-chunk-0">
				<CardHeader className="p-2 pt-0 md:p-4">
					<CardTitle>Contact us:</CardTitle>
					<CardDescription className={'font-light max-w-[75%]'}>
						Unlock all features and get unlimited access to our support team
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2 pt-0 md:p-4 md:pt-0">
					<Button variant={'glowing'} className={'mb-4 w-full'}>
						Visit our site
					</Button>
					<DiscordButton className={'mx-0'} />
				</CardContent>
			</Card>
		</div>
	)
}

export default LeftSideBar
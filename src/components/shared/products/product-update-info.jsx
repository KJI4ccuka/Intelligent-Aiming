import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ShieldCheck } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const RightSidebar = ({ productsInfo }) => {
	const status = productsInfo.product_status
	const days = productsInfo.sub_days_left
	
	const statusClasses = {
		Undetected: 'text-primary',
		Testing: 'text-yellow-50',
		Detected: 'text-red-500'
	}
	
	return (
		<div className={'w-full md:w-[40%] pr-4'}>
			<Card className="bg-background-01 overflow-hidden" x-chunk="dashboard-05-chunk-4">
				<CardHeader className="flex p-3 border-b flex-row items-center justify-between bg-background-01 xl:p-4">
					<CardTitle className="text-sm group inline-flex items-center xl:text-lg">
						{productsInfo.name}
					</CardTitle>
					<ShieldCheck className={'bg-[#141419] text-primary w-5 h-5 xl:h-6 xl:w-5'} />
				</CardHeader>
				<CardContent className="p-3 lg:p-4 text-sm">
					<div className="grid gap-2">
						<div className="font-semibold">Product Details</div>
						<ul className="grid gap-1.5">
							<li className="flex items-center justify-between">
								<span className="text-muted-foreground font-light">Time left:</span>
								<span className={days <= 3 && 'text-red-500'}>{days} DAYS</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="text-muted-foreground font-light">Status:</span>
								<span className={statusClasses[status] || ''}>
									{status.toUpperCase()}
								</span>
							</li>
						</ul>
						<Separator className="my-2" />
						<Tabs defaultValue="Changelog" className="w-full">
							<TabsList className={'bg-background-02'}>
								<TabsTrigger className={'text-xs lg:text-sm'} value="Changelog">Changelog:</TabsTrigger>
								<TabsTrigger className={'text-xs lg:text-sm'} value="Requirements">Requirements:</TabsTrigger>
							</TabsList>
							<TabsContent value="Changelog">
								<ScrollArea className="h-28 w-full border-border bg-background-02/10 border rounded-lg p-2.5">
									<ul className="grid gap-3 mr-1.5">
										<li className="flex flex-col items-left justify-between">
											<span
												className="text-xs text-muted-foreground lg:text-sm">{productsInfo.product_changelog_title}:</span>
											<span className={'text-xs font-light lg:text-sm'}>{productsInfo.product_changelog_body}</span>
										</li>
									</ul>
								</ScrollArea>
							</TabsContent>
							<TabsContent value="Requirements">
								<ScrollArea className="h-28 w-full bg-background-02/10 border-border border rounded-lg p-2.5">
									<ul className="grid gap-3 mr-1.5">
										{productsInfo.product_requirements.map((item, index) => {
											const [key, value] = Object.entries(item)[0]
											
											return (
												<li key={index} className="flex items-center justify-between">
													<span className="text-xs text-muted-foreground font-light lg:text-sm">- {key}</span>
													<span className={'text-xs lg:text-sm'}>{value.toUpperCase()}</span>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</TabsContent>
						</Tabs>
					</div>
				</CardContent>
				<CardFooter className="flex flex-row items-center border-t bg-background/ px-5 py-3">
					<div className="text-xs text-foreground/80 font-light">
						Last update: <time dateTime="2023-11-23">{productsInfo.product_last_updated}</time>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}

export default RightSidebar
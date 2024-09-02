import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ClipboardList, ShieldCheck, SquarePen } from 'lucide-react'
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
		<div className={'w-full flex flex-col md:w-[40%] pr-2 lg:pr-4'}>
			<Card className="bg-background-01 overflow-hidden" x-chunk="dashboard-05-chunk-4">
				<CardHeader className="flex p-2.5 border-b flex-row items-center space-y-0 justify-between bg-background-01 lg:p-3 xl:p-4">
					<CardTitle className="text-xs group inline-flex items-center xl:text-lg">
						{productsInfo.name}
					</CardTitle>
					<ShieldCheck className={'text-primary my-0 w-[18px] h-[18px] xl:h-6 xl:w-5'} />
				</CardHeader>
				<CardContent className="p-2.5 text-sm lg:p-4">
					<div className="grid">
						<span className="mb-1.5 text-xs font-semibold lg:text-sm lg:mb-2">Product Details</span>
						<ul className="grid lg:gap-2">
							<li className="flex items-center justify-between">
								<span className="text-[11px] text-muted-foreground font-light lg:text-sm">Time left:</span>
								<span className={`text-[11px] lg:text-sm ${days <= 3 && 'text-red-500'}`}>{days} DAYS</span>
							</li>
							<li className="flex items-center justify-between">
								<span className="text-[11px] text-muted-foreground font-light lg:text-sm">Status:</span>
								<span className={`text-[11px] lg:text-sm ${statusClasses[status] || ''}`}>
									{status.toUpperCase()}
								</span>
							</li>
						</ul>
						<Separator className="my-1 lg:my-2" />
						<Tabs defaultValue="Requirements" className="w-full">
							<TabsList className={'h-7 bg-background-02 lg:h-10'}>
								<TabsTrigger className={'py-0 px-1.5 text-[9px] lg:text-sm lg:py-1'} value="Requirements"><ClipboardList className={'w-3 lg:w-3.5 mr-1'}/>Requirements:</TabsTrigger>
								<TabsTrigger className={'py-0 px-1.5 text-[9px] lg:text-sm lg:py-1'} value="Changelog"><SquarePen className={'w-3 lg:w-3.5 mr-1'}/>Changelog:</TabsTrigger>
							</TabsList>
							<TabsContent value="Changelog">
								<ScrollArea className="h-[70px] w-full bg-background-02/10 border-border border rounded-lg p-1.5 lg:h-28 lg:p-2.5">
									<ul className="grid gap-0 mr-1.5 lg:gap-2">
										<li className="flex flex-col items-left justify-between">
											<span
												className="text-[10px] text-muted-foreground font-light lg:text-sm">{productsInfo.product_changelog_title}:</span>
											<span className={'text-[10px] leading-3 font-light lg:text-sm'}>{productsInfo.product_changelog_body}</span>
										</li>
									</ul>
								</ScrollArea>
							</TabsContent>
							<TabsContent value="Requirements">
								<ScrollArea className="h-[70px] w-full bg-background-02/10 border-border border rounded-lg p-1.5 lg:h-28 lg:p-2.5">
									<ul className="grid gap-0 mr-1.5 lg:gap-2">
										{productsInfo.product_requirements.map((item, index) => {
											const [key, value] = Object.entries(item)[0]
											
											return (
												<li key={index} className="flex items-center justify-between">
													<span className="text-[10px] text-muted-foreground font-light lg:text-sm">- {key}</span>
													<span className={'text-[10px] lg:text-sm'}>{value.toUpperCase()}</span>
												</li>
											)
										})}
									</ul>
								</ScrollArea>
							</TabsContent>
						</Tabs>
					</div>
				</CardContent>
				<CardFooter className="flex px-2.5 py-2 flex-row items-center border-t bg-background/ lg:px-5 lg:py-3">
					<div className="text-[10px] text-foreground/80 font-light lg:text-xs">
						Last update: <time dateTime="2023-11-23">{productsInfo.product_last_updated}</time>
					</div>
				</CardFooter>
			</Card>
		</div>
	)
}

export default RightSidebar
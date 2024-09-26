'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Hero } from '@/components/shared/hero'
import { CircleHelp, Undo2 } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function GetHelpPage() {
	
	const data = {
		'data': {
			'survey': [
				{
					'icon': 'url.com/cogweel.png',
					'headline': 'Bluescreen',
					'action': 'follow',
					'redirect_url': '',
					'data': [
						{
							'icon': 'url.com/cogweel.png',
							'headline': 'Error Code : 0xC0000005',
							'action': 'redirect',
							'redirect_url': 'url.com/forum/help-c05'
						},
						{
							'icon': 'url.com/cogweel.png',
							'headline': 'Error Code : 0xC0000666',
							'action': 'redirect',
							'redirect_url': 'url.com/forum/help-c666'
						},
						{
							'icon': 'url.com/cogweel.png',
							'headline': 'UNEXPECTED_KERNEL_MODE_TRAP',
							'action': 'follow',
							'redirect_url': '',
							'data': [
								{
									'icon': 'url.com/cogweel.png',
									'headline': 'ON INJECTION',
									'action': 'redirect',
									'redirect_url': 'url.com/forum/help-trap-inj'
								},
								{
									'icon': 'url.com/cogweel.png',
									'headline': 'WHILE PLAYING',
									'action': 'redirect',
									'redirect_url': 'url.com/forum/help-trap-play'
								}
							]
						}
					]
				},
				{
					'icon': 'url.com/cogweel.png',
					'headline': 'Bluescreen',
					'action': 'follow',
					'redirect_url': ''
				},
				{
					'icon': 'url.com/cogweel.png',
					'headline': 'Bluescreen',
					'action': 'follow',
					'redirect_url': ''
				}
			]
		}
	}
	
	const renderNestedData = (items) => {
		return (
			<div className="mt-2">
				{items.map((item, index) => (
					<div key={index} className="mb-2">
						<button
							className="w-full bg-background-02 text-white font-bold py-3 px-4 rounded-lg mb-2 flex items-center transition-transform transform hover:scale-105 hover:bg-background-03 shadow-md hover:shadow-lg"
						>
							<img src={item.icon} className="w-5 h-5 mr-2" />
							<span className={'flex w-full justify-between'}>
									{item.headline}
							</span>
							<div className={'flex w-full justify-end'}>
								<CircleHelp />
							</div>
						</button>
						
						{item.data && renderNestedData(item.data)}
					</div>
				))}
			</div>
		)
	}
	
	return (
		<div className=" min-h-screen flex flex-col items-center justify-center">
			<Hero />
			
			<div className="w-full flex flex-col gap-5 relative max-w-4xl p-5 bg-background-01 rounded-xl border">
		<Link href={'/products'}>
			<Button
				variant="glowing"
				className="rounded-lg w-28 mr-2 font-light tracking-wide text-xs h-7 px-2 py-1.5 flex items-center lg:h-10 lg:py-2 lg:text-sm lg:px-4"
			>
				<Undo2 className="xs:block mr-1.5 h-3.5 w-3.5" />
				Go back
			</Button>
		</Link>
		
				<span className={'text-xs absolute left-[35%] top-[25px] text-center ml-2 font-semibold lg:text-xl'}>Intelligent aiming - get help</span>
				
				{data.data.survey.map((item, index) => (
					<Accordion key={index} type="single" collapsible>
						<AccordionItem className={''} value={index + 1}>
							<AccordionTrigger
								className={'w-full bg-gradient-to-r border bg-background-02 text-white font-bold py-4 px-6 rounded-lg shadow-md hover:bg-foreground/5 hover:shadow-lg'}>
								<span className={'flex'}>
									<img src={item.icon} className="w-6 h-6 mr-2" /> {item.headline}
								</span>
							</AccordionTrigger>
							<AccordionContent className={'p-4'}>
								<Link href={'https://intelligent-aiming.xyz'} target={'_blank'}>
									{item.data && renderNestedData(item.data)}
								</Link>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</div>
	)
}

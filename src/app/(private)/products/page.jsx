'use client'

import { Hero } from '@/components/shared/hero'
import React from 'react'
import VideoPlayer from '@/components/shared/products/vedeo-player'
import RightSidebar from '@/components/shared/products/product-update-info'
import LeftSideBar from '@/components/shared/products/left-sidebar'
import ProductDescription from '@/components/shared/products/product-description'
import VideoGallery from '@/components/shared/products/images-gallery'
import PaymentsEmbed from '@/components/shared/payment-embed'

const products =
	[
		{
			'icon': 'https://intelligent-aiming.xyz/IAIcons/ARK-Survival-Ascended.png',
			'name': 'ARK: Survival Ascended',
			'images': [
				'/images/Desktop-Screenshot-2023.11.10---18.14.41.49.png',
				'/images/Desktop-Screenshot-2023.11.10---18.05.28.23.png',
				'/images/Desktop-Screenshot-2023.11.10---18.14.41.49.png'
			],
			'video': 'https://www.dropbox.com/scl/fi/3f92a76ldv88ym20ezklz/ark_sa.mp4?rlkey=1y9vzie8xi30va3auxqc71zhn&st=iavlac2m&dl=0',
			'product_url': 'https://intelligent-aiming.xyz/products/ark_sa?ref=loader',
			'product_status': 'Undetected',
			'product_last_updated': '08.15.2025',
			'product_changelog_title': '08.15.2025 ASA Update',
			'product_changelog_body': '- Optimization\n- Security Improvements',
			'product_requirements': [{ 'Windowed Fullscreen': 'Enabled' },
				{ 'Steam Overlay': 'Enabled' }, { 'Windows 10/11': 'Supported' }],
			
			'sub_active': '1',
			'sub_days_left': '31',
			
			'purchase_options': [
				{
					'title': '1 DAY',
					'sellix_crypto': '654e58050af9d',
					'sellx_paypal': '65a1e735ad644'
				},
				{
					'title': '7 WEEK',
					'sellix_crypto': '654e591cc0cab',
					'sellx_paypal': '65a1e7106003a'
				},
				{
					'title': '31 DAY',
					'sellix_crypto': '654e593122d37',
					'sellx_paypal': '65a1e6ce0b040'
				}
			],
			
			'upgrades_available': [
				{
					'title': 'PRIVATE_UPGRADE',
					'sellix-crypto': '654e591cc0cab',
					'sellx-paypal': ''
				},
				{
					'title': 'GODMODE_FEATURE',
					'sellix-crypto': '654e593122d37',
					'sellx-paypal': ''
				}
			]
			
		},
		{
			'icon':
				'https://intelligent-aiming.xyz/IAIcons/ARK-Survival-Evolved.png',
			'name':
				'ARK: Survival Evolved',
			'images':
				[
					'https://intelligent-aiming.xyz/images/20230503191951_1.jpg',
					'https://intelligent-aiming.xyz/images/ARK--Survival-Evolved-Screenshot-2023.04.28---22.18.15.52.webp',
					'https://intelligent-aiming.xyz/images/20230502182553_1.jpg'
				],
			'video':
				'https://intelligent-aiming.xyz/Videos/ark_se.mp4',
			'product_url':
				'https://intelligent-aiming.xyz/products/ark_se?ref=loader',
			'product_status':
				'Undetected',
			'product_last_updated':
				'08.15.2027',
			'product_changelog_title':
				'08.15.2027 ASE Update',
			'product_changelog_body':
				'- Security Improvements',
			'product_requirements':
				[{ 'Windowed Fullscreen': 'Enabled' },
					{ 'Steam Overlay': 'Enabled' }, { 'Windows 10/11': 'Supported' }],
			
			'sub_active':
				'0',
			'sub_days_left':
				'',
			
			'purchase_options':
				[
					{
						'title': '1 DAY',
						'sellix-crypto': '6454f1f221cb9',
						'sellx-paypal': '65a1e069ce3a7'
					},
					{
						'title': '7 WEEK',
						'sellix-crypto': '6454f1cc51fe2',
						'sellx-paypal': '65a1df34dcdc4'
					},
					{
						'title': '31 DAY',
						'sellix-crypto': '6454efe802749',
						'sellx-paypal': '65a1dd7690f99'
					}
				],
			
			'upgrades_available':
				[]
			
		}
	]


export default function ProductsPage() {
	
	return (
		<section>
			<div className={'flex relative justify-end'}>
				<Hero />
				
				<LeftSideBar products={products} />
				
				<div className={'w-[75%] relative border-l-2'}>
					<div className={'bg-background-01 p-3.5 border-b w-full flex justify-between items-center'}>
						<span className={'text-sm font-semibold w-1/2 lg:text-xl'}>Intelligent aiming</span>
					</div>
					
					<div className={'mt-4 flex justify-between'}>
						<div className={'w-[60%] px-4'}>
							<div>
								<VideoPlayer videoUrl={products[0].video} />
							</div>
							
							<VideoGallery images={products[0].images} />
						</div>
						
						<RightSidebar productsInfo={products[0]} />
					</div>
					<div className={'p-4'}>
						<ProductDescription pay={<PaymentsEmbed />} product={products[0]} />
					</div>
				
				</div>
			</div>
		</section>
	)
}

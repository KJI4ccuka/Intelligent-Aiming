import React, { useEffect, useState } from 'react'
import { DollarSign, X } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Cookies from 'js-cookie'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

const PaymentsEmbed = (
	{
		sellixPaypalId,
		sellixCryptoId,
		productId,
		children
	}) => {
	const searchParams = useSearchParams()
	
	const [showModal, setShowModal] = useState(false)
	const [showPaypal, setShowPaypal] = useState(false)
	const [showCryptocurrencies, setShowCryptocurrencies] = useState(false)
	const [showMiddleman, setShowMiddleman] = useState(false)
	
	console.log(searchParams.get('ref'))
	
	useEffect(() => {
		const modalCloseHandler = (event) => {
			if (event.data === 'close-embed') {
				setShowModal(false)
				setShowPaypal(false)
				setShowCryptocurrencies(false)
			}
		}
		
		window.addEventListener('message', modalCloseHandler)
		
		return () => {
			window.removeEventListener('message', modalCloseHandler)
		}
	}, [])
	
	
	const handleEmbedButtonClick = () => {
		setShowModal(true)
	}
	
	const modalClose = () => {
		setShowModal(false)
	}
	
	let iframeUrl
	
	if (showPaypal) {
		iframeUrl = `https://embed.sellix.io/product/${sellixPaypalId}`
	} else {
		iframeUrl = `https://embed.sellix.io/product/${sellixCryptoId}`
	}
	
	// useEffect(() => {
	//   const refCustomIDFromCookie = Cookies.get('referralID');
	//   if (refCustomIDFromCookie) {
	//     iframeUrl += `?custom-ref=${refCustomIDFromCookie}`;
	//   }
	// }, []);
	const refCustomIDFromCookie = Cookies.get('referralID')
	
	if (refCustomIDFromCookie !== null) {
		iframeUrl += `?custom-ref=${refCustomIDFromCookie}`
	}
	// const queryRefCustomID = searchParams.get('ref');
	// if (queryRefCustomID !== null) {
	//   iframeUrl += `?custom-ref=${queryRefCustomID}`;
	// }
	
	const handlePaypalButtonClick = () => {
		setShowPaypal(true)
		setShowModal(false)
	}
	const handlePaypalButtonClose = () => {
		setShowPaypal(false)
	}
	
	const handleCryptocurrenciesButtonClick = () => {
		setShowCryptocurrencies(true)
		setShowModal(false)
	}
	const handleCryptocurrenciesButtonClose = () => {
		setShowCryptocurrencies(false)
	}
	return (
		<>
			<Button
				variant='glowing'
				onClick={handleEmbedButtonClick}
				className="rounded-lg font-semibold tracking-wide text-lg px-16 py-5 flex items-center"
			>
				<DollarSign className="xs:block mr-2 h-6 w-6" />
				<span className="text-[18px] font-normal xs:text-lg tracking-wide">Purchase</span>
			</Button>
			{showModal && (
				<>
					{/* <div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-[99998] bg-black/75" onClick={modalClose} ></div> */}
					<div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-[99999] bg-black/75">
						{/* <div className="absolute w-full h-full" onClick={modalClose}></div> */}
						<div className="max-w-[500px] w-full bg-background-01 p-4 rounded-lg ">
							<div className="flex py-2 px-2">
								<p className="text-md">Intelligent Aiming Pay</p>
								<X className="ml-auto cursor-pointer" onClick={modalClose}></X>
							</div>
							<Separator className="my-4" />
							<div className="flex flex-col justify-center items-center gap-3">
								<p className="text-lg mb-3">How would you like to pay?</p>
								<button
									id="crypto"
									className="rounded-lg border-2 bg-background-02 w-[80%] cursor-pointer hover:border-primary p-3  text-left flex gap-2"
									onClick={handleCryptocurrenciesButtonClick}
								>
									<img
										id="crypto"
										className="w-[50px]"
										src="/icon/btc_green-p-500.png"
									/>
									<div id="crypto">
										<p id="crypto" className="text-2xl font-bold">Cryptocurrency</p>
										<p id="crypto" className="font-secondary text-primary text-sm">
											Crypto orders have <b>5% discount.</b>
										</p>
									</div>
								</button>
								<button
									id="paypal"
									className="rounded-lg border-2 bg-background-02 w-[80%] cursor-pointer hover:border-primary p-3  text-left flex gap-2"
									onClick={handlePaypalButtonClick}
								>
									<img
										id="paypal"
										className="w-[50px]"
										src="/icon/paypal-p-500.png"
									/>
									<div id="paypal">
										<p id="paypal" className="text-2xl font-bold">Paypal</p>
										<p id="paypal" className="font-secondary text-primary text-sm">
											Debit/Credit Card is <b>supported.</b>
										</p>
									</div>
								</button>
								<button
									className="rounded-lg border-2 bg-background-02 w-[80%] cursor-pointer p-3  text-left flex gap-2 saturate-0"
									// onClick={() => setShowMiddleman(true)}
								>
									<img
										className="w-[50px]"
										src="/icon/person.png"
									/>
									<div>
										<p className="text-2xl font-bold">Middle Man</p>
										<p className="font-secondary text-primary text-sm">
											Purchase from official resellers.
										</p>
									</div>
								</button>
								<Separator className="my-4" />
								<p className="">
									Make sure to read our{' '}
									<a
										href="https://zensersky.mysellix.io/terms"
										target="_blank"
										className="font-bold font-secondary hover:text-primary"
									>
										Terms of Service
									</a>
								</p>
							</div>
						</div>
					</div>
				</>
			)}
			{showPaypal ? (
				<div className="sellix-modal">
					<div
						className="sellix-backdrop"
						onClick={handlePaypalButtonClose}
					></div>
					<div className="sellix-iframe-wrapper">
						<div className="sellix-iframe-content">
							<div className="sellix-iframe-loader-container">
								<img
									src="https://cdn.sellix.io/static/embed/loader.png"
									alt="Loader"
									className="sellix-iframe-loader"
									style={{ width: '35px' }}
								/>
							</div>
							<iframe
								src={iframeUrl}
								className="sellix-iframe"
								title="Sellix Embed"
								onLoad={() => {
									const loader = document.querySelector(
										'.sellix-iframe-loader-container'
									)
									if (loader) {
										loader.remove()
									}
								}}
							></iframe>
						</div>
					</div>
				</div>
			) : null}
			{showCryptocurrencies ? (
				<div className="sellix-modal">
					<div
						className="sellix-backdrop"
						onClick={handleCryptocurrenciesButtonClose}
					></div>
					<div className="sellix-iframe-wrapper">
						<div className="sellix-iframe-content">
							<div className="sellix-iframe-loader-container">
								<img
									src="https://cdn.sellix.io/static/embed/loader.png"
									alt="Loader"
									className="sellix-iframe-loader"
									style={{ width: '35px' }}
								/>
							</div>
							<iframe
								src={iframeUrl}
								className="sellix-iframe"
								title="Sellix Embed"
								onLoad={() => {
									const loader = document.querySelector(
										'.sellix-iframe-loader-container'
									)
									if (loader) {
										loader.remove()
									}
								}}
							></iframe>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}

export default PaymentsEmbed

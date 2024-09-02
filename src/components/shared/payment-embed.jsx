import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import Cookies from 'js-cookie'
import { Separator } from '@/components/ui/separator'
import useModalStore from '@/store/modal'

const PaymentsEmbed = (
	{
		sellixPaypalId,
		sellixCryptoId,
		productId,
		children
	}) => {
	// const searchParams = useSearchParams()
	
	const { isModalOpen, showModal, closeModal } = useModalStore()
	
	const [showPaypal, setShowPaypal] = React.useState(false)
	const [showCryptocurrencies, setShowCryptocurrencies] = React.useState(false)
	const [showMiddleman, setShowMiddleman] = React.useState(false)
	
	useEffect(() => {
		const modalCloseHandler = (event) => {
			if (event.data === 'close-embed') {
				closeModal()
				setShowPaypal(false)
				setShowCryptocurrencies(false)
			}
		}
		
		window.addEventListener('message', modalCloseHandler)
		
		return () => {
			window.removeEventListener('message', modalCloseHandler)
		}
	}, [closeModal])
	
	const handleEmbedButtonClick = () => {
		showModal()
	}
	
	const modalClose = () => {
		closeModal()
	}
	
	let iframeUrl
	
	if (showPaypal) {
		iframeUrl = `https://embed.sellix.io/product/${sellixPaypalId}`
	} else {
		iframeUrl = `https://embed.sellix.io/product/${sellixCryptoId}`
	}
	
	const refCustomIDFromCookie = Cookies.get('referralID')
	
	if (refCustomIDFromCookie !== null) {
		iframeUrl += `?custom-ref=${refCustomIDFromCookie}`
	}
	
	const handlePaypalButtonClick = () => {
		setShowPaypal(true)
		closeModal()
	}
	
	const handlePaypalButtonClose = () => {
		setShowPaypal(false)
	}
	
	const handleCryptocurrenciesButtonClick = () => {
		setShowCryptocurrencies(true)
		closeModal()
	}
	
	const handleCryptocurrenciesButtonClose = () => {
		setShowCryptocurrencies(false)
	}
	
	return (
		<>
			{isModalOpen && ( // Используйте состояние из Zustand
				<>
					<div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-[99999] bg-black/75">
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

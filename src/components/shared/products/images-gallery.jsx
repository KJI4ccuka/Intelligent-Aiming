import React, { useState } from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { Minimize } from 'lucide-react'

const VideoGallery = ({ images }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	
	const galleryItems = images.map((item, index) => ({
		original: item,
		thumbnail: item,
		alt: `Image ${index + 1}`,
	}));
	
	const openGallery = (index) => {
		setCurrentIndex(index);
		setIsOpen(true);
	};
	
	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setIsOpen(false);
		}
	};
	
	return (
		<div className="flex justify-center mt-0 lg:mt-2">
			<div className="flex py-1.5 justify-center w-full overflow-x-auto space-x-3 lg:py-[8px]">
				{images.map((item, index) => (
					<div
						key={index}
						className="bg-background w-[70px] h-[50px] lg:w-[94px] lg:h-[58px] rounded-[4px] aspect-square flex-shrink-0 cursor-pointer transition-transform transform hover:scale-110"
						onClick={() => openGallery(index)}
					>
						<img
							src={item}
							alt={`Thumbnail ${index + 1}`}
							className="w-full h-full rounded-[4px]"
						/>
					</div>
				))}
			</div>
			
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
					onClick={handleOverlayClick}
				>
					<Minimize
						onClick={() => setIsOpen(false)}
						className={'absolute w-8 h-8 bottom-10 right-10 z-50 text-white hover:text-primary cursor-pointer'}
					/>
					<div>
						<ImageGallery
							items={galleryItems}
							startIndex={currentIndex}
							showThumbnails={false}
							showFullscreenButton={false}
							showNav={true}
							showPlayButton={false}
							useBrowserFullscreen={true}
						/>
					</div>
				
				</div>
			)}
		</div>
	);
};

export default VideoGallery;

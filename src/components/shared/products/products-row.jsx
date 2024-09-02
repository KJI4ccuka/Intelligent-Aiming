import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { MoreHorizontal } from 'lucide-react'
import useModalStore from '@/store/modal'

const ProductRow = ({ item }) => {
	const showModal = useModalStore((state) => state.showModal)
	
	return (
		<TableRow
			className={`relative p-1.5 flex justify-between items-center lg:p-2.5 transition-all ${
				item.sub_active > 0 ? 'bg-background-01 cursor-pointer' : 'bg-background-02 opacity-50'
			}`}
		>
			<TableCell className="hidden sm:table-cell p-0">
				<img className="max-w-8 lg:w-12" src={item.icon} alt="Product icon" />
			</TableCell>
			<TableCell className="text-[9px] leading-3 font-normal p-0 mx-1 md:text-[10px] lg:mx-2 lg:text-sm">
				{item.name}
			</TableCell>
			<TableCell className={'p-0'}>
				<Badge className={'text-[8px] py-0 px-1.5 font-light lg:text-[11px]'} variant="outline">
					{item.sub_active > 0 ? 'Active' : 'Inactive'}
				</Badge>
			</TableCell>
			<TableCell className={'mx-2 p-0'}>
				<Button
					className={'h-6 w-6 lg:w-9 lg:h-9 rounded-sm'}
					aria-haspopup="true"
					size="icon"
					variant="ghost"
					disabled={item.sub_active === 0}
				>
					<MoreHorizontal className="h-4 w-4 lg:h-5 lg:w-5" />
					<span className="sr-only">Toggle menu</span>
				</Button>
			</TableCell>
			
			{item.sub_active <= 0 && (
				<div onClick={showModal} className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity">
					<Button
						variant="primary"
						className="text-sm text-primary lg:text-base"
					>
						Purchase
					</Button>
				</div>
			)}
		</TableRow>
	)
}

export default ProductRow

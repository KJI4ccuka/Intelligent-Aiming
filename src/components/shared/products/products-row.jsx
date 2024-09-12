import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, MoreHorizontal } from 'lucide-react'
import useModalStore from '@/store/modal'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import Link from 'next/link'

const ProductRow = ({ item, isSelected, onSelect }) => {
	const showModal = useModalStore((state) => state.showModal)
	
	return (
		<TableRow
			onClick={onSelect}
			className={`relative p-1.5 flex justify-between items-center lg:p-2.5 transition-all ${
					isSelected
						? 'border border-primary/65 rounded bg-background-01 shadow-[inset_0_2px_15px_rgba(0,255,150,0.2),0_0_8px_rgba(0,255,150,0.6)]'
						: 'bg-background-01 cursor-pointer'
			}`}
		>
			<TableCell className="hidden sm:table-cell p-0">
				<img className="max-w-7 lg:w-12" src={item.icon} alt="Product icon" />
			</TableCell>
			<TableCell className="text-[8px] leading-3 font-normal p-0 mx-1 md:text-[8.5px] lg:mx-2 lg:text-sm">
				{item.name}
			</TableCell>
			<TableCell className={'p-0'}>
				<Badge className={'text-[7.6px] py-0 px-1 font-light md:px-1.5 lg:text-[11px]'} variant="outline">
					{item.sub_active > 0 ? 'Active' : 'Inactive'}
				</Badge>
			</TableCell>
			<TableCell className={'mx-2 p-0'}>
				<DropdownMenu>
					<DropdownMenuTrigger>
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
					</DropdownMenuTrigger>
					<DropdownMenuContent className="w-36">
						<Link href={'https://intelligent-aiming.xyz/'} target={'_blank'}>
							<DropdownMenuItem className={'flex text-xs justify-between cursor-pointer'}>
								Visit our site <ArrowUpRight className={'w-5 h-5'} />
							</DropdownMenuItem>
						</Link>
					</DropdownMenuContent>
				</DropdownMenu>
			</TableCell>
		</TableRow>
	)
}

export default ProductRow

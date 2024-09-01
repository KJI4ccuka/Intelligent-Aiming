import { TableCell, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, MoreHorizontal } from 'lucide-react'
import Link from 'next/link'

const ProductRow = ({ item }) => {
	return (
		<TableRow
			className={`p-1.5 flex justify-between items-center lg:p-2.5 ${item.sub_active > 0 ? 'bg-background-01' : 'bg-background-02 opacity-30 cursor-not-allowed'}`}>
			<TableCell className="hidden sm:table-cell p-0">
				<img className="max-w-8 lg:w-12" src={item.icon} alt="Product icon" />
			</TableCell>
			<TableCell className="text-[9px] leading-3 font-normal p-0 mx-1 md:text-[10px] lg:mx-2 lg:text-sm">{item.name}</TableCell>
			<TableCell className={'p-0'}>
				<Badge className={'text-[8px] py-0 px-1.5 font-light lg:text-[11px]'} variant="outline">
					{item.sub_active > 0 ? 'Active' : 'Inactive'}
				</Badge>
			</TableCell>
			<TableCell className={'mx-2 p-0'}>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button className={'h-6 w-6 lg:w-9 lg:h-9 rounded-sm'} aria-haspopup="true" size="icon" variant="ghost"
						        disabled={item.sub_active === 0}>
							<MoreHorizontal className="h-4 w-4 lg:h-5 lg:w-5" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</DropdownMenuTrigger>
					{item.sub_active > 0 && (
						<DropdownMenuContent className={'bg-background-01'} align="end">
							<Link href={''}>
								<DropdownMenuLabel className={'flex font-light justify-between ml-1 p-1 text-sm gap-1'}>
									<span>Visit our site</span>
									<ArrowUpRight width={20} />
								</DropdownMenuLabel>
							</Link>
						</DropdownMenuContent>
					)}
				</DropdownMenu>
			</TableCell>
		</TableRow>
	)
}

export default ProductRow
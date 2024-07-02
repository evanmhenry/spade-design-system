/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	ColumnDef,
	ColumnFiltersState,
	SortingState,
	VisibilityState,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table'
import { ChevronDown, Plus } from 'lucide-react'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/DropdownMenu'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../Table'
import { useState } from 'react'
import { Button } from '../Button'
import { Input } from '../Input'

type DataTableProps = {
	title?: string
	data: any[] | undefined
	columns: ColumnDef<any>[]
	searchFilter?: string[]
	addLabel?: string
	onAdd?: () => void
	onRowClick?: (row: any) => void
	addDisabled?: boolean
	columnsEnabled?: boolean
	pageSize?: number
}

const DataTable = ({ title, data, columns, searchFilter = [], addLabel, onAdd, onRowClick, addDisabled, columnsEnabled }: DataTableProps) => {
	const [sorting, setSorting] = useState<SortingState>([])
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
	const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
	const [rowSelection, setRowSelection] = useState({})

	const table = useReactTable({
		data: data || [],
		columns,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnFilters,
			columnVisibility,
			rowSelection,
			pagination: {
				pageIndex: 0,
				pageSize: 100,
			},
		},
	})

	const [searchValue, setSearchValue] = useState('')

	const searchTable = (value: string) => {
		setSearchValue(value)
		const newFilters = searchFilter.map((columnName) => ({
			id: columnName,
			value,
		}))
		setColumnFilters(newFilters)
	}

	const handleRowClick = (row: any) => {
		if (onRowClick) {
			onRowClick(row)
		}
	}

	return (
		<div className='w-full'>
			<div className='flex items-center pb-4 justify-between'>
				{/* TODO: add global search / search multiple columns */}
				<h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>{title}</h3>
				<div className='flex items-center space-x-2'>
					{searchFilter.length > 0 && <Input placeholder='Search...' value={searchValue} onChange={(event) => searchTable(event.target.value)} className='max-w-sm' />}
					{columnsEnabled && (
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant='outline' className='ml-auto'>
									Columns <ChevronDown className='ml-2 h-4 w-4' />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align='end'>
								{table
									.getAllColumns()
									.filter((column) => column.getCanHide())
									.map((column) => (
										<DropdownMenuCheckboxItem key={column.id} className='capitalize' checked={column.getIsVisible()} onCheckedChange={(value) => column.toggleVisibility(!!value)}>
											{column.id}
										</DropdownMenuCheckboxItem>
									))}
							</DropdownMenuContent>
						</DropdownMenu>
					)}
					{onAdd && (
						<Button variant='brand' onClick={onAdd} disabled={addDisabled}>
							<Plus className='mr-2 h-5 w-5' />
							{addLabel}
						</Button>
					)}
				</div>
			</div>
			<div className='rounded-md border'>
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id}>{header.isPlaceholder ? undefined : flexRender(header.column.columnDef.header, header.getContext())}</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow key={row.id} data-state={row.getIsSelected() && 'selected'} onClick={() => handleRowClick(row.original)}>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell colSpan={columns.length} className='h-24 text-center'>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className='flex items-center justify-end space-x-2 py-4'>
				<div className='flex-1 text-sm text-muted-foreground'>
					{/* {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected. */}
				</div>
				<div className='space-x-2'>
					<Button variant='outline' size='sm' onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
						Previous
					</Button>
					<Button variant='outline' size='sm' onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
						Next
					</Button>
				</div>
			</div>
		</div>
	)
}

export default DataTable


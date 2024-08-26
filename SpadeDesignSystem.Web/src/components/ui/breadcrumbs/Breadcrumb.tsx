import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight } from 'lucide-react'

import { cn } from '@/lib/Utils'

const Breadcrumb = React.forwardRef<
	HTMLElement,
	React.ComponentPropsWithoutRef<'nav'> & {
		separator?: React.ReactNode
	}
>(({ ...props }, ref) => <nav ref={ref} aria-label='breadcrumb' {...props} />)
Breadcrumb.displayName = 'Breadcrumb'

const BreadcrumbList = React.forwardRef<HTMLOListElement, React.ComponentPropsWithoutRef<'ol'>>(({ className, ...props }, ref) => (
	<ol ref={ref} className={cn('flex flex-wrap items-center gap-1.5 break-words  text-muted-foreground sm:gap-3', className)} {...props} />
))
BreadcrumbList.displayName = 'BreadcrumbList'

const BreadcrumbItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(({ className, ...props }, ref) => (
	<li ref={ref} className={cn('inline-flex items-center gap-3', className)} {...props} />
))
BreadcrumbItem.displayName = 'BreadcrumbItem'

const BreadcrumbLink = React.forwardRef<
	HTMLAnchorElement,
	React.ComponentPropsWithoutRef<'a'> & {
		asChild?: boolean
	}
>(({ asChild, className, ...props }, ref) => {
	const Comp = asChild ? Slot : 'a'

	return <Comp ref={ref} className={cn('transition-colors hover:text-foreground ', className)} {...props} />
})
BreadcrumbLink.displayName = 'BreadcrumbLink'

const BreadcrumbPage = React.forwardRef<HTMLSpanElement, React.ComponentPropsWithoutRef<'span'>>(({ className, ...props }, ref) => (
	<span ref={ref} role='link' aria-disabled='true' aria-current='page' className={cn('font-normal text-foreground', className)} {...props} />
))
BreadcrumbPage.displayName = 'BreadcrumbPage'

type BreadcrumbSeparatorProps = {
	className?: string
}

const BreadcrumbSeparator = ({ className }: BreadcrumbSeparatorProps) => <ChevronRight size={20} className={`${className} text-border`} />

export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator }
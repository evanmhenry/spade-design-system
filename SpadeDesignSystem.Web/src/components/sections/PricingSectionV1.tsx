/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/components/ui/Button'
import { CheckCircle2 } from 'lucide-react'
import { PricingOptions } from '@/pages/landingPage/Content'

const PricingSectionV1 = () => {
	return (
		<section id='pricing' className='w-screen border-b bg-background'>
			<div className='container flex max-w-5xl flex-col gap-8 sm:text-center items-center py-16 md:py-20 lg:py-24'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='text-3xl font-semibold'>Pricing</div>
					<div className='text-muted-foreground'>Simple, transparent pricing that grows with your business</div>
				</div>
				<div className='flex flex-col sm:flex-row text-left w-full gap-5'>
					{PricingOptions.map((option) => (
						<div className='flex flex-col gap-6 w-full border rounded-2xl p-6'>
							<div className='flex flex-col gap-4'>
								<div className='text-md font-semibold text-brand-gradient'>{option.name}</div>
								<div className='text-4xl font-semibold'>
									{option.price ? (
										<>
											{option.price} <span className='text-sm text-muted-foreground'>/ month</span>
										</>
									) : (
										'Contact'
									)}
								</div>

								<div className='text-muted-foreground'>{option.description}</div>
							</div>
							<Button variant={option.primary ? 'brandGradient' : 'outline'} size='lg' onClick={option.action}>
								{option.cta}
							</Button>
							<ul className='flex flex-col gap-3'>
								{option.bullets.map((bullet: string) => (
									<li className='flex gap-2'>
										<CheckCircle2 size={24} className='text-brand' />
										<span className='text-muted-foreground'>{bullet}</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default PricingSectionV1

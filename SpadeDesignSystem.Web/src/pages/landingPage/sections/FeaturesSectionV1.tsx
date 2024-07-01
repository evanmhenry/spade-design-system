/* eslint-disable @typescript-eslint/no-explicit-any */
type FeaturesSectionV1Props = {
	features: {
		title: string
		description: string
		image?: string
	}[]
}

const FeaturesSectionV1 = ({ features }: FeaturesSectionV1Props) => {
	return (
		<section id='features' className='w-screen border-b bg-muted/40'>
			<div className='container flex max-w-5xl flex-col gap-8 sm:text-center items-center py-16 md:py-20 lg:py-24'>
				<div className='flex flex-col gap-2 w-full'>
					<div className='text-3xl font-semibold'>Features</div>
					<div className='text-muted-foreground'>Streamline your payroll tipping process</div>
				</div>
				{features.map((feature: any) => (
					<div className='flex flex-col gap-6 sm:flex-row text-left items-center w-full'>
						<div className='flex flex-col gap-4 sm:w-1/2'>
							<div className='flex flex-col gap-1'>
								<div className='text-sm text-brand-gradient font-semibold'>{feature.name}</div>
								<div className='text-2xl font-semibold'>{feature.title}</div>
								<div className='text-muted-foreground'>{feature.description}</div>
							</div>
						</div>
						{feature.image && <img src={feature.image} alt={feature.image} className='aspect-video rounded-2xl sm:w-1/2' />}
					</div>
				))}
			</div>
		</section>
	)
}

export default FeaturesSectionV1

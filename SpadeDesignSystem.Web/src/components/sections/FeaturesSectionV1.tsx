/* eslint-disable @typescript-eslint/no-explicit-any */
import { FeatureList, FeaturesDescription } from '@/pages/landingPage/Content'

const FeaturesSectionV1 = () => {
	return (
		<section id='features' className='w-screen border-b bg-muted/40'>
			<div className='container max-w-5xl py-16 md:py-20 lg:py-24'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl font-semibold'>Features</h2>
					<p className='text-muted-foreground'>{FeaturesDescription}</p>
				</div>
				<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
					{FeatureList.map((feature: any) => (
						<div key={feature.name} className='flex flex-col gap-6'>
							<div className='flex flex-col gap-4'>
								<div className='text-sm text-brand-gradient font-semibold'>{feature.name}</div>
								<h3 className='text-2xl font-semibold'>{feature.title}</h3>
								<p className='text-muted-foreground'>{feature.description}</p>
							</div>
							{feature.image && <img src={feature.image} alt={feature.title} className='aspect-video rounded-2xl' />}
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default FeaturesSectionV1


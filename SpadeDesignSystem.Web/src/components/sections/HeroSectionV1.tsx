import { Button } from '@/components/ui/Button'
import { PrimaryCta, handlePrimaryCtaClick, HeroDescription, HeroTitle } from '@/pages/landingPage/Content'
import { ArrowRight } from 'lucide-react'

const HeroSectionV1 = () => {
	return (
		<section className='w-screen border-b bg-background'>
			<div className='container flex max-w-5xl flex-col gap-8 sm:text-center items-center py-16 md:py-20 lg:py-24'>
				<div className='w-full sm:w-80 md:w-7/12 flex flex-col gap-8'>
					<div className='flex flex-col items-center gap-4'>
						<div className='text-center text-4xl font-bold md:text-6xl lg:leading-[1.1]'>
							<HeroTitle />
						</div>
						<div className='text-center text-lg font-light text-primary/60 max-w-96'>{HeroDescription}</div>
					</div>
					<div className='flex flex-col sm:flex-row-reverse sm:w-full items-center justify-center gap-2'>
						<Button size='lg' variant='brandGradient' onClick={handlePrimaryCtaClick} className='w-full md:w-auto'>
							{PrimaryCta} <ArrowRight className='w-5 h-5 ml-2' />
						</Button>
						{/* <Button size='lg' variant='outline' onClick={onDemo} className='w-full md:w-auto'>
							<PlayCircle className='w-5 h-5 mr-2' />
							{SecondaryCta}
						</Button> */}
					</div>
				</div>
				{/* <img src={image} alt={image} className='aspect-video rounded-2xl' /> */}
			</div>
		</section>
	)
}

export default HeroSectionV1

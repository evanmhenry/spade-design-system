import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'
import { PrimaryCta, GetStartedTitle, handlePrimaryCtaClick } from '@/pages/landingPage/Content'

const GetStartedSectionV1 = () => {
	return (
		<section className='w-screen bg-background py-24 md:py-32 lg:py-40 bg-brand-gradient'>
			<div className='flex flex-col gap-8 sm:text-center items-center'>
				<div className='flex flex-col gap-8 sm:gap-10 md:gap-12'>
					<div className='text-center text-4xl font-semibold md:text-6xl text-secondary'>{GetStartedTitle}</div>
					<Button size='lg' variant='outline' onClick={handlePrimaryCtaClick} className='mx-auto'>
						{PrimaryCta} <ArrowRight className='w-5 h-5 ml-2' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default GetStartedSectionV1

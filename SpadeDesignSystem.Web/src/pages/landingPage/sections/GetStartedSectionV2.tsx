import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

type GetStartedSectionV2Props = {
	title: string
	cta: string
	onSignUp: () => void
}

const GetStartedSectionV2 = ({ title, cta, onSignUp }: GetStartedSectionV2Props) => {
	return (
		<section className='container w-screen bg-background pb-16 md:pb-20 lg:pb-24'>
			<div className='container flex max-w-5xl flex-col gap-8 sm:text-center items-center py-24 md:py-32 lg:py-40 bg-brand-gradient'>
				<div className='flex flex-col gap-8 sm:gap-10 md:gap-12'>
					<div className='text-center text-4xl font-semibold md:text-6xl text-secondary'>{title}</div>
					<Button size='lg' variant='outline' onClick={onSignUp} className='mx-auto'>
						{cta} <ArrowRight className='w-5 h-5 ml-2' />
					</Button>
				</div>
			</div>
		</section>
	)
}

export default GetStartedSectionV2

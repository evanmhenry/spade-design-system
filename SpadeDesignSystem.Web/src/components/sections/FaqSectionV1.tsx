import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { FaqDescription, FaqList } from '@/pages/landingPage/Content'

const FaqSectionV1V1 = () => {
	return (
		<section className='container flex max-w-5xl flex-col gap-4 sm:text-center items-center py-16 md:py-20 lg:py-24'>
			<div className='flex flex-col gap-2'>
				<div className='text-3xl font-semibold'>Frequently asked questions</div>
				<div className='text-muted-foreground'>{FaqDescription}</div>
			</div>
			<Accordion type='single' collapsible className='w-full text-left text-lg'>
				{FaqList.map((faq) => (
					<AccordionItem value={faq.question}>
						<AccordionTrigger>{faq.question}</AccordionTrigger>
						<AccordionContent className='text-lg'>{faq.answer}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</section>
	)
}

export default FaqSectionV1V1


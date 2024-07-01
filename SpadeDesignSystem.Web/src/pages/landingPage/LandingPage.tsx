import HeroSectionV1 from './sections/HeroSectionV1'
import FaqSectionV1 from './sections/FaqSectionV1'
import PricingSectionV1 from './sections/PricingSectionV1'
import GetStartedSectionV3 from './sections/GetStartedSectionV3'
import FeaturesSectionV2 from './sections/FeaturesSectionV2'

const LandingPage = () => {
	return (
		<>
			<HeroSectionV1 />
			<FeaturesSectionV2 />
			<PricingSectionV1 />
			<FaqSectionV1 />
			<GetStartedSectionV3 />
		</>
	)
}
export default LandingPage

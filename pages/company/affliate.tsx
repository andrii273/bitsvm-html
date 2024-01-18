import TitleBar from '@/components/sections/support/titleBar'
import Showcase from '@/components/sections/company/showcase'


import { cards } from '@/utils/constants/common'

export default function About() {
    return (
        <>
            <TitleBar />
            <Showcase
                cards={cards}
            />
        </>
    )
}

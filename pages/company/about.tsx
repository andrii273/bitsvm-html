import QuestionSection from '@/components/sections/support/question'

import { folders } from '@/utils/constants/common'
import FolderSection from '@/components/sections/support/folder'
import TitleBar from '@/components/sections/support/titleBar'
import Experience from '@/components/sections/company/experience'
import Vision from '@/components/sections/company/vision'
import Scene from '@/components/sections/company/scene'
import Counter from '@/components/sections/company/counter'


export default function About() {
    return (
        <>
            <TitleBar />
            <Experience />
            <Vision />
            <Scene />
            <FolderSection
                folders={folders}
            />
            <Counter />
        </>
    )
}

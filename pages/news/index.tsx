import QuestionSection from '@/components/sections/support/question'

import { folders } from '@/utils/constants/common'
import FolderSection from '@/components/sections/support/folder'
import TitleBar from '@/components/sections/support/titleBar'


export default function Knowledge() {
    return (
        <>
            <TitleBar />
            <QuestionSection />
            <FolderSection
                folders={folders}
            />
        </>
    )
}

import FaqSection from '@/components/sections/faq'
import CollectionTab from '@/components/sections/servers/collectionTab'
import QuestionSection from '@/components/sections/support/question'
import { collections } from '@/utils/constants/game-server-1'

import { folders } from '@/utils/constants/common'
import FolderSection from '@/components/sections/support/folder'


export default function Knowledge() {
    return (
        <>
            <QuestionSection />
            <FolderSection
                folders={folders}
            />
        </>
    )
}

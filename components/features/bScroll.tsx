import Link from 'next/link'


export default function BScroll() {
    return (
        <>
            <div className="float-text show-on-scroll">
                <span><Link href="#">Scroll to top</Link></span>
            </div>
            <div className="scrollbar-v show-on-scroll"></div>
        </>
    )
}
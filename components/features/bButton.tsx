import Link from 'next/link'
import { useEffect } from 'react';

export default function BButton(props: any) {
    const { classname, url, content } = props;

    return (
        <>
            <Link className={classname} data-hover={content} href={url}><span>{content}</span></Link>
        </>
    )

} 
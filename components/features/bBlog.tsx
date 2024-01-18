import Link from 'next/link'
import Image from 'next/image';
import { useEffect } from 'react';

export default function BBlog(props: any) {
    const { src, url, date, title, content } = props;

    return (

        <div className="col-lg-4 col-md-6 mb10">
            <div className="bloglist item">
                <div className="post-content">
                    <div className="post-image">
                        <div className="d-tagline">
                            <span>games</span>
                            <span>guide</span>
                        </div>
                        <Image alt="" src={src} width={356} height={200} style={{ width: "auto", height: "auto" }} />
                    </div>
                    <div className="post-text">
                        <div className="d-date">{date}</div>
                        <h4><Link href="news-single.html">{title}<span></span></Link></h4>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )

} 
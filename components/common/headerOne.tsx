import Image from 'next/image'
import Link from 'next/link'
import BButton from '../features/bButton'
import { useRouter } from 'next/router';

export default function HeaderOne() {

    const router = useRouter();

    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    <div id="logo">
                                        <Link href="index.html">
                                            <Image className="logo-main" src="/assets/images/logo.png" width={192} height={32} alt="" />
                                            <Image className="logo-mobile" src="/assets/images/logo-mobile.png" width={192} height={32} alt="" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    <li><Link className="menu-item" href="#section-hero">Home</Link></li>
                                    <li><Link className="menu-item" href="#section-features">Features</Link></li>
                                    <li><Link className="menu-item" href="#section-games">Games</Link></li>
                                    <li><Link className="menu-item" href="#section-server">Server</Link></li>
                                    <li><Link className="menu-item" href="#section-faq">FAQ</Link></li>
                                    <li><Link className="menu-item" href="#section-contact">Contact</Link></li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <Link href="game-server-1.html" className="btn-main btn-line"><span>Get Hosting</span></Link>
                                    <span id="menu-btn"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
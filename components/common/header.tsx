import Image from 'next/image'
import Link from 'next/link'
import BButton from '../features/bButton'
import { useRouter } from 'next/router';

export default function Header() {

    const router = useRouter();

    return (
        <header className="transparent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="de-flex sm-pt10">
                            <div className="de-flex-col">
                                <div className="de-flex-col">
                                    {/* logo begin */}
                                    <div id="logo">
                                        <Link href="index.html">
                                            <Image className="logo-main" src="/assets/images/logo.png" width={190} height={32} alt="" />
                                            <Image className="logo-mobile" src="/assets/images/logo-mobile.png" width={50} height={32} alt="" />
                                        </Link>
                                    </div>
                                    {/* logo close */}
                                </div>
                            </div>
                            <div className="de-flex-col header-col-mid">
                                <ul id="mainmenu">
                                    {
                                        router.pathname == '/' ? <li><Link className="menu-item" href="/">Home</Link>
                                        </li> :
                                            <li><Link className="menu-item" href="/">Home</Link>
                                                <ul>
                                                    <li><Link className="menu-item" href="/">Homepage One</Link></li>
                                                    <li><Link className="menu-item" href="/home/page2">Homepage Two</Link></li>
                                                    <li><Link className="menu-item" href="/home/page3">Homepage Three</Link></li>
                                                    <li><Link className="menu-item" href="/home/page4">Homepage Four</Link></li>
                                                    <li><Link className="menu-item" href="/home/page5">Homepage Five</Link></li>
                                                    <li><Link className="menu-item" href="/home/page6">Homepage Six</Link></li>
                                                    <li><Link className="menu-item" href="/home/page7">[New] Homepage Seven</Link></li>
                                                    <li><Link className="menu-item" href="/home/one">[New] Onepage One</Link></li>
                                                </ul>
                                            </li>
                                    }
                                    <li className='menu-item-had-children has-child'>
                                        <Link className="menu-item" href="/servers/game-server-1">Game Servers</Link>
                                        <ul>
                                            <li><Link className="menu-item" href="/servers/game-server-1">Games Server One</Link></li>
                                            <li><Link className="menu-item" href="/servers/game-server-2">Games Server Two</Link></li>
                                            <li><Link className="menu-item" href="/servers/pricing-1">Pricing Table One</Link></li>
                                            <li><Link className="menu-item" href="/servers/pricing-2">Pricing Table Two</Link></li>
                                            <li><Link className="menu-item" href="/servers/pricing-3">Pricing Table Three</Link></li>
                                            <li><Link className="menu-item" href="/servers/pricing-4">Pricing Table Four</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" href="/locations">Locations</Link></li>
                                    <li className='menu-item-had-children has-child'><Link className="menu-item" href="#">Support</Link>
                                        <ul>
                                            <li><Link className="menu-item" href="/support/knowledgebase">Knowledgebase</Link></li>
                                            <li><Link className="menu-item" href="/support/faq">FAQ</Link></li>
                                            <li><Link className="menu-item" href="/support/contact">Contact</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link className="menu-item" href="/news">News</Link></li>
                                    <li className='menu-item-had-children has-child'><Link className="menu-item" href="#">Company</Link>
                                        <ul>
                                            <li><Link className="menu-item" href="/company/about">About Us</Link></li>
                                            <li><Link className="menu-item" href="/company/affliate">Affliates</Link></li>
                                        </ul>
                                    </li>
                                    <li className='menu-item-had-children has-child'><Link className="menu-item" href="#">More Pages</Link>
                                        <ul>
                                            <li><Link className="menu-item" href="/auth/login">Login</Link></li>
                                            <li><Link className="menu-item" href="/auth/register">Register</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div className="de-flex-col">
                                <div className="menu_side_area">
                                    <BButton
                                        classname="btn-main btn-line"
                                        url="game-server-1.html"
                                        content="Get Hosting"
                                    />
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
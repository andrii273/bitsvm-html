import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/common/header'
import IntroSection from '@/components/sections/home/intro'
import PremiumSection from '@/components/sections/home/premium'
import BPayment from '@/components/features/bPayment'


export default function PaymentSection({ payments }: any) {
    return (
        <section>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Payment Methods</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">We accept</h2>
                        <div className="spacer-20"></div>
                    </div>
                    <div className="col-lg-12 text-center">
                        <div className="row g-4">
                            {
                                payments.map((payment: any, index: number) => (
                                    <BPayment
                                        key={"intro-payment-" + index}
                                        classname="m-1 p-4 rounded-10 bg-custom"
                                        src={payment.src}
                                        width={185}
                                        height={140}
                                    />
                                ))

                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
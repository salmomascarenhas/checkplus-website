import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './footer'
import Navbar from './navbar'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Check Plus </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
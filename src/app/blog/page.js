"use client"

import Link from "next/link"
import Container from "../Components/Ui/Container"
import backIcon from '../../../public/Assets/images/back.svg';
import Image from "next/image";

export default function BlogPage() {
    return (
        <Container >
            <div>
                <h1 className="text-black flex items-center justify-center text-5xl/tight">Blog</h1>
                <Link href={'/'} className="text-black">      <Image src={backIcon} alt='next' className='h-5 w-5' /> Back to Web Development</Link>
            </div>
        </Container>
    )
}
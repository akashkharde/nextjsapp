"use client"

import Link from "next/link"

export default function  BlogPage () {
    return(
        <div>
            <h1 className="text-black flex items-center justify-center text-5xl/tight">Blog</h1>
            <Link href={'/'} className="text-black">Back to App</Link>
            </div>
    )
}
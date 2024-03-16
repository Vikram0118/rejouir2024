import getFormattedDate from "@/lib/getFormattedDate"
import { getPostsMeta, getPostByName } from "@/lib/event"
import { notFound } from "next/navigation"
import Link from "next/link"
import 'highlight.js/styles/github-dark.min.css'

export const revalidate = 86400

type Props = {
    params: {
        postId: string
    }
}

export async function generateStaticParams() {
    const posts = await getPostsMeta() //deduped!

    if (!posts) return []

    return posts.map((post) => ({
        postId: post.id
    }))
}

export async function generateMetadata({ params: { postId } }: Props) {

    const post = await getPostByName(`Blogs/${postId}.mdx`) //deduped!

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.meta.title,
    }
}

export default async function Post({ params: { postId } }: Props) {

    console.log(postId)
    const post = await getPostByName(`Blogs/${postId}.mdx`) //deduped!

    if (!post) notFound()

    const { meta, content } = post

    const pubDate = getFormattedDate(meta.date)

    return (
        <div className="max-w-5xl mx-auto px-5 mt-24 prose prose-xl text-black">
            <p className="heading1 mt-4 mb-0">{meta.title}</p>
            <p className="text-sm mt-0 ">
                {pubDate}
            </p>
            <article>
                {content}
            </article>
                            
            <Link href="/" className="mt-11">Back to home</Link>
            
        </div>
    )
}
'use server'

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addPost } from "@/services/posts"
import BlogPost from "@/interfaces/post"


export default async function createPost(data: FormData) {
    const title = data.get("title") as string
    const author = data.get("author") as string
    const url = data.get('url') as string
    const likes = Number(data.get('likes')) || 0 

    if (!title || !author || !url) {
        throw new Error("Post data is incomplete or has errors")
    }

    const newPost: Omit<BlogPost, 'id'> = {
        title,
        author,
        url,
        likes
    }

    console.log("New Post Created:", newPost)
    addPost(newPost)
    revalidatePath('/posts')
    redirect('/posts')
}

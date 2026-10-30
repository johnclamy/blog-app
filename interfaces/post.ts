// Define the shape for a blog post
export default interface BlogPost {
    id: number
    title: string
    author: string
    url: string
    likes: number
}


// Define a shape for setting unique post IDs
export interface ResolvePostId {
    nextId: number
    getNextId: () => number
}

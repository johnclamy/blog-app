import BlogPost, { ResolvePostId } from "@/interfaces/post" 


// mock data to be replace by database data
const posts: BlogPost[] = [
    {
        id: 1,
        title: 'Optimizing LLM Inference Pipelines',
        author: 'A. Engineer',
        url: 'https://example.com/optimizing-llm',
        likes: 42,
    },

    {
        id: 2,
        title: 'Webpack vs Turbopack in Next.js 15',
        author: 'S. Developer',
        url: 'https://example.com/webpack-turbopack',
        likes: 17,
    },

    {
        id: 3,
        title: 'High-Signal Architecture Patterns',
        author: 'M. Architect',
        url: 'https://example.com/high-signal',
        likes: 89,
    },
]


const postId: ResolvePostId = {
    nextId: 4,
    getNextId: function() {
        return this.nextId++
    }
}


export default posts
export { postId }

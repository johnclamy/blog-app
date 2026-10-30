import getPosts from "@/services/posts"


export default function PostsPage() {
    const posts = getPosts()

    return (
        <main>
            <header>
                <h1>posts</h1>
            </header>
            
            <article>
                {posts.map((post) => (
                    <section key={post.id}>
                        <a href={post.url} target="_blank" rel="noopener noreferrer">
                            {post.title} by {post.author} - {post.likes} likes
                        </a>
                    </section>
                ))}
            </article>
        </main>
    )
}

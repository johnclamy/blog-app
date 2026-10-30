import posts from "@/services/data"


export default function PostsPage() {
    return (
        <main>
            <header>
                <h1>Blog Posts</h1>
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

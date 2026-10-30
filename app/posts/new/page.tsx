import createPost from "@/app/actions/post"


export default function PostFormPage() {
    return (
        <main>
            <header>
                <h1>create new post</h1>
            </header>
            <form action='{createPost}'>
                <div>
                    <label htmlFor="title">title:</label>
                    <input type="text" name="title" id="title" required />
                </div>
                <div>
                    <label htmlFor="author">author:</label>
                    <input type="text" name="author" id="author" required />
                </div>
                <div>
                    <label htmlFor="url">url:</label>
                    <input type="url" name="url" id="url" required />
                </div>
                <div>
                    <label htmlFor="likes">likes:</label>
                    <input type="number" name="likes" id="likes" defaultValue={0} />
                </div>
                <button type="submit">add post</button>
            </form>
        </main>
    )
}

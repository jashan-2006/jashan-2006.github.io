// app/blog/page.js
import Link from 'next/link'

export default function BlogPage() {
  const posts = [
    { id: 1, title: 'First Post', slug: 'first-post' },
    { id: 2, title: 'Second Post', slug: 'second-post' }
  ]

  return (
    <div className="blog-page">
      <h1>Blog Articles</h1>
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
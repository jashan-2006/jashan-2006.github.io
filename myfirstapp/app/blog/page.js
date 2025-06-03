// Import the Link component from Next.js for client-side navigation
import Link from 'next/link'

// Define the BlogPage component as the default export
export default function BlogPage() {
  // Sample array of blog posts with id, title, and slug
  const posts = [
    { id: 1, title: 'First Post', slug: 'first-post' },
    { id: 2, title: 'Second Post', slug: 'second-post' }
  ]

  // Render the blog page with a list of posts
  return (
    <div className="blog-page">
      <h1>Blog Articles</h1>
      <ul className="post-list">
        {/* Map through the posts array and render each post as a list item */}
        {posts.map(post => (
          <li key={post.id}>
            {/* Link to the individual blog post page */}
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
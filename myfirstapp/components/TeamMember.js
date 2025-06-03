// Define a functional component called TeamMember that takes props: name, role, and bio
export default function TeamMember({ name, role, bio }) {
  return (
    // Render a div with class "team-member"
    <div className="team-member">
      {/* Display the team member's name in an h3 */}
      <h3>{name}</h3>
      {/* Display the team member's role in a paragraph with class "role" */}
      <p className="role">{role}</p>
      {/* Display the team member's bio in a paragraph with class "bio" */}
      <p className="bio">{bio}</p>
    </div>
  )
}
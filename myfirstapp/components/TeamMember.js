export default function TeamMember({ name, role, bio }) {
  return (
    <div className="team-member">
      <h3>{name}</h3>
      <p className="role">{role}</p>
      <p className="bio">{bio}</p>
    </div>
  )
}
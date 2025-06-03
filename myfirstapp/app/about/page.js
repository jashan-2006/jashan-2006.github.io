import TeamMember from '@/components/TeamMember'

export default function About() {
  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about our team and mission</p>
      
      <div className="member">
        <TeamMember 
          name="Example 1 " 
          role="Front-End Developer" 
          bio="React and Next.js"
        />
        <TeamMember 
          name="Example 2" 
          role="Back-End Developer" 
          bio="  UI/UX Designer"
        />
      </div>
    </div>
  )
}
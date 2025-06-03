// Import the TeamMember component from the components directory
import TeamMember from '@/components/TeamMember'

// Define the About component
export default function About() {
  return (
    <div>
      {/* Page title */}
      <h1>About Us</h1>
      {/* Short description */}
      <p>Learn more about our team and mission</p>
      
      {/* Team members section */}
      <div className="member">
        {/* First team member */}
        <TeamMember 
          name="Example 1 " 
          role="Front-End Developer" 
          bio="React and Next.js"
        />
        {/* Second team member */}
        <TeamMember 
          name="Example 2" 
          role="Back-End Developer" 
          bio="  UI/UX Designer"
        />
      </div>
    </div>
  )
}
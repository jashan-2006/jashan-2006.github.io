import Counter from '@/components/Counter'
import ToggleMessage from '@/components/ToggleMessage'
import styles from './page.module.css'

/**
 * Home component for the Advanced Front-End App.
 * Renders the main page with a welcome message, assignment description,
 * and feature components such as Counter and ToggleMessage.
 *
 * @returns {JSX.Element} The rendered home page component.
 */
export default function Home() {
  return (
    <div>
      <h1>Welcome to My Advanced Front-End App</h1>
      <p>This is my assignment submission for Advanced Front-End Development</p>
      
      <div className={styles.features}>
        <Counter initialValue={0} />
        <ToggleMessage />
      </div>
    </div>
  )
}
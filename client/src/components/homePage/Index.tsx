import { Link } from 'react-router-dom'
import { Main } from './index_styles'
import { Hero, Section } from '../../global-styles/component_styles'

const Index = () => {
    return (
        <Main>
            <Hero>
                <div>
                    <h1>Take control of your projects with TaskMaster.</h1>
                    <p>Maximize your team&apos;s productivity with an all-in-one project management tool.</p>
                    <Link to='/register'>Join TaskMaster </Link>
                    <Link to='/tour'>Explore</Link>
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1663933534186-e50d9fcef389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60" alt="hero" />
            </Hero>
            <Section>
                <h2>Streamline team collaboration.</h2>
                <p>TaskMaster simplifies team collaboration by providing one place for task tracking, project planning, and workflow management.</p>
            </Section>
            <Section>
                <h2>Increase project efficiency.</h2>
                <p>With the help of TaskMaster&semi;s calendars, timelines, and project templates, teams can prioritize tasks, set deadlines and milestones, and optimize their projects for maximum efficiency.</p>
            </Section>
            <Section>
                <h2>Automated task tracking.</h2>
                <p>TaskMaster&semi;s task tracking feature ensures that projects are on schedule and team members are aware of their responsibilities. The automated reminders and notifications keep everyone up to date and accountable.</p>
            </Section>
            <br />
            <Section>
                <q>&quot;I love how easy it is to collaborate with my team using TaskMaster.&quot;</q>
                <img src="https://plus.unsplash.com/premium_photo-1663933534186-e50d9fcef389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80" alt="person" />
            </Section>
            <Section>
                <img src="https://plus.unsplash.com/premium_photo-1663933534186-e50d9fcef389?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=877&q=80" alt="newsletter"></img>
                <div>
                    <h2>Boost your team&semi;s productivity with TaskMaster today.</h2>
                    <form >
                        <input type="email" />
                    </form>
                </div>
            </Section>
        </Main>
    )
}

export default Index
import Experience from "./Experience"
import data from "../data"

function ExperienceSection(){
    const experiences=data.map(exp=>{
        return(
        <Experience
            key={exp.id}
            data={exp}
        />
        )
    })
    return (
        <section className="experiences-section">
            <h2>Online Experiences</h2>
            <p>Hire me, I love learning and I want to help you make great, interactive websites. Who knows you might even find a great employee.</p>
            <div className="experiences-list">
                {experiences}
            </div>
        </section>
    )
}

export default ExperienceSection
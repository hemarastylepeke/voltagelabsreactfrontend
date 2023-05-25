import styles from "../style";
import ProjectCard from "./ProjectCard";
import { project } from "../constants";

const Portfolio = () => (
    <section id="portfolio" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
            <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
                <h2 className={styles.heading2}>Our Recent Projects</h2>
                <div className="w-full md:mt-0 mt-6">
                    <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                        Prepare to be inspired as you explore the diverse range of projects we've 
                        brought to life, each designed to electrify the online presence of our clients. With a team of 
                        skilled developers, designers, and strategists, we channel our creative energy into crafting 
                        captivating websites, dynamic web applications, and cutting-edge digital solutions. From sleek 
                        and responsive designs to seamless user experiences, our portfolio represents the power and 
                        expertise behind VoltageLabs.              
                    </p>
                </div>
            </div>
            <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
                    {project.map((card) => (
                    <ProjectCard key={card.id} {...card} />
                    ))}
            </div>
            <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
    </section>
  )
export default Portfolio
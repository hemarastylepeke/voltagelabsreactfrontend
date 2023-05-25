import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from './FeedbackCard';

const Testimonials = () =>  (
    <section id="testimonials" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>What are our <br className="sm:block hidden"/> Happy Clients saying</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            At VoltageLabs, we take great pride in our web design and development services, striving to deliver exceptional results for our clients. Our commitment to excellence and customer satisfaction has earned us a solid reputation in the industry. But don't just take our word for it – let's hear what our clients have to say about their experience working with VoltageLabs.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )

export default Testimonials;
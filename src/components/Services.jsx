import { services } from "../constants";
import styles, { layout } from "../style";
import Button from './Button';

const ServiceCard = ({icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== services.length -1 ? "mb-6" : "mb-0"} service-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-barlow font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-barlow font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Services = () => {
  return (
    <section id="services" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Our <br className="sm:block hidden"/> Comprehensive Services.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          At VoltageLabs, we understand the crucial role that a visually stunning and user-friendly website plays in today's digital landscape. With our expertise in the field, we strive to transform your online presence into a captivating and dynamic platform that drives engagement, enhances your brand identity, and maximizes your online success. <br />
          As a leading web design and development company, we take pride in our ability to blend creativity and technical proficiency seamlessly. Our team of highly skilled designers and developers are adept at crafting unique, tailor-made solutions that align with your specific business goals and objectives. We believe that every website should be a reflection of your brand's essence, and our services are centered around achieving just that. <br />
          By offering the services listed, we go beyond the technical aspects of web development and focus on a holistic approach, helping you make informed decisions and strategies that will drive your digital growth and achieve your desired outcomes.
        </p>

        <Button styles="mt-10"/>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
        <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient"/>
          {services.map((service, index) => (
            <ServiceCard key={service.id} {...service} index={index}/>
          ))}
        </div>
    </section>
  );
}

export default Services
import { stacks } from "../constants";
import styles from "../style";

const Stacks = () => (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {stacks.map((stack) => (
          <div key={stack.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={stack.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain"/>
          </div>
        ))}
      </div>
    </section>
  )
export default Stacks;
import {
  Business,
  CTA,
  CardDeal,
  ContactForm,
  Footer,
  Hero,
  Navbar,
} from "@/components";
import styles from "./style";
const Home = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <CardDeal />
          <Business />
          <CTA />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;

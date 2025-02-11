// components/HomePage.js
import styles from '../styles/HomePage.module.css';
import ServicePackages from './ServicePackages';
import ContactForm from './ContactForm';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <section className={styles.hero} id="home">
        <img 
          src="/images/hero-key.jpg" 
          alt="Key visual representing our services" 
          className={styles.heroImage} 
          loading="lazy" // Lazy loading for performance
        />
        <div className={styles.heroText}>
          <h1>Welcome to Our Website</h1>
          <p>Your modern, custom solution starts here.</p>
        </div>
      </section>
      <section id="services">
        <ServicePackages />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </div>
  );
};

export default HomePage;

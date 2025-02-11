// components/ServicePackages.js
import styles from '../styles/ServicePackages.module.css';

const packages = [
  {
    title: "Website Development",
    tagline: "Create a tailored, fully custom website to fit your needs.",
    price: "Undisclosed"
  },
  {
    title: "Small Automation Scripts/File Organization",
    tagline: "Efficient solutions for your small-scale automation needs.",
    price: "Contact for details"
  },
  {
    title: "Coming Soon",
    tagline: "Stay tuned for more services!",
    price: ""
  }
];

const ServicePackages = () => {
  return (
    <div className={styles.packagesContainer}>
      {packages.map((pkg, index) => (
        <div key={index} className={styles.packageCard}>
          <h3>{pkg.title}</h3>
          <p>{pkg.tagline}</p>
          {pkg.price && <p className={styles.price}>{pkg.price}</p>}
        </div>
      ))}
    </div>
  );
};

export default ServicePackages;

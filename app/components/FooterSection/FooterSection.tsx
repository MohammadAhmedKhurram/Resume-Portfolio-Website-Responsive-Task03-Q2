import Styles from "@/app/components/Styles/footer.module.css";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#2C3E50",
        color: "#ECF0F1",
      }}
    >
      <div className={Styles.div}>
        <p>
          Copyright &copy; {new Date().getFullYear()} Muhammad Ahmed Khurram.
          All Rights Reserved.
        </p>
        <p>
          Empowering the future with technology, innovation, and creativity.
        </p>
      </div>
    </footer>
  );
}

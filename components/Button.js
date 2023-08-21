const Button = ({ styles }) => {
  return (
    <a
      href="#contact"
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
  text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      Get Started
    </a>
  );
};

export default Button;

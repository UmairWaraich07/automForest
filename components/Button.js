const Button = ({ styles, label, link }) => {
  return (
    <a
      href={link}
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium
  text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
    >
      {label}
    </a>
  );
};

export default Button;

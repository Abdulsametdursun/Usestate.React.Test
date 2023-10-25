import "./CustomButton.css";

const CustomButton = ({
  buttonTitle,
  buttonType,
  onClick,
  className,
  type,
}) => {
  // const { buttonTitle } = props;

  return (
    <button
      type={type}
      className={`btn ${className}`}
      style={{
        backgroundColor:
          buttonType === "success"
            ? "green"
            : buttonType === "info"
            ? "aquamarine"
            : "red",
      }}
      onClick={onClick}
    >
      {buttonTitle}
    </button>
  );
};
export default CustomButton;

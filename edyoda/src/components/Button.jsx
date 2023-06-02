const Button = ({ variant, children }) => {
  if (variant === "primary") {
    ExampleStyle;
  }
  console.log(variant);

  return <button style={ExampleStyle}>{children}</button>;
};
const ExampleStyle = {
  backgroundColor: "linear-gradient(266.79deg, #0048FF 4.63%, #0096FF 100%)",
  borderRadius: "52px",
  width: "166px",
  height: "40px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px 42px",
  gap: "10px",
};

export default Button;

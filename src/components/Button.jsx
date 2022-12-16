const Button = ({
  icon,
  bgColor,
  color,
  size,
  text,
  borderRadius,
  bgHoverColor,
  width,
  onClick,
}) => {
  return (
    <button
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
      onClick={onClick}
    >
      {icon} {text}
    </button>
  );
};
export default Button;

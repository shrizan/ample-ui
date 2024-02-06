import "./input.css";

interface ButtonProps {

}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  ...props
}: ButtonProps) => {
  return (
    <input
      className="input"
      {...props}
    />
  );

}

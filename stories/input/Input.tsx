import "./input.css";

interface InputProps {
  size: "small" | "medium" | "large",
  label?: string;
  placeholder?: string;
}

const SIZE_TO_CLASS = {
  small: "input-sm",
  "medium": "input-md",
  "large": "input-lg"
};

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  size = "medium",
  placeholder,
  ...props
}: InputProps) => {
  const classNames = ["input", SIZE_TO_CLASS[size]];
  return <input
    className={classNames.join(" ")}
    placeholder={placeholder}
    {...props}
  />;

}

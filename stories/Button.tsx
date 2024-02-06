import "./button.css";
export type ButtonType = "primary" | "outline" | "default" | "dashed" | "text" | "link";

const BUTTON_TYPE_TO_CLASS = {
  "primary": "btn-primary",
  "outline": "btn-outline",
  "default": "",
  "dashed": "btn-dashed",
  "text": "btn-text",
  "link": "btn-link",
  "small": "btn-sm",
  "medium": "btn-md",
  "large": "btn-lg"
};

interface ButtonProps {
  type?: ButtonType;
  /**checking if the button is danger or not
   * 
   */
  danger?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  danger = false,
  size = 'medium',
  type = "default",
  label,
  ...props
}: ButtonProps) => {
  const btnClass = ['btn'];
  const btnType = BUTTON_TYPE_TO_CLASS[type];
  btnClass.push(BUTTON_TYPE_TO_CLASS[type])
  if (danger) btnClass.push(btnType + '-danger');
  btnClass.push(BUTTON_TYPE_TO_CLASS[size]);
  return (
    <button
      className={btnClass.join(' ')}
      {...props}
    >
      {label}
    </button>
  );

}

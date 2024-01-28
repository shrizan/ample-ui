export type ButtonType = "primary" | "outline" | "default" | "dashed" | "text" | "link";

const SIZE_TO_CLASS = {
  "small": ' py-2 px-10 rounded-button ',
  "medium": ' py-3 px-15 rounded-button ',
  "large": ' py-4 px-20 rounded-button  '
}

function getClassOnType(type: ButtonType) {
  if (type == "primary") {
    return 'bg-primary border-0 color-red';
  }
  else {
    return 'text-black';
  }
}

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

  if (type == "primary") {
    return (
      <button
        className="rounded-md px-7 py-2 bg-primary text-white hover:bg-primary-300 duration-100"
        {...props}
      >
        {label}
      </button>
    );
  }
  else {
    return (
      <button
        className="rounded-md px-7 py-2 border border-zinc-400 text-zinc-600 hover:border-primary duration-100 hover:text-primary"
        {...props}
      >
        {label}
      </button>
    );
  }


  // return (
  //   <button
  //     type="button"
  //     className={[SIZE_TO_CLASS[size], getClassOnType(type)].join(' ')}
  //     {...props}
  //   >
  //     {label}
  //   </button>
  // );
};

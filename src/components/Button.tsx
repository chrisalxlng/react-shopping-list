interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

export const Button = ({ children, ...rest }: ButtonProps) => (
  <button
    {...rest}
    className='bg-danger border-none cursor-pointer p-2 rounded select-none'
  >
    {children}
  </button>
);

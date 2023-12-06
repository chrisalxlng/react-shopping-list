interface ButtonProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {}

export const TextInput = ({ children, className, ...rest }: ButtonProps) => (
  <input {...rest} className={`${className}`}>
    {children}
  </input>
);

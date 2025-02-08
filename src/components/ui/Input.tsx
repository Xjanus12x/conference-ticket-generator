type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, ...props }: InputProps) {
  return (
    <div className="grid gap-2">
      <label className=" md:text-xl" htmlFor={props.id}>
        {label}
      </label>
      <input
        {...props}
        className={`bg-neutral-700 bg-opacity-30 border px-3 py-3.5 rounded-xl border-neutral-500 focus-visible:outline-neutral-500 outline-none ${props.className}`}
      />
    </div>
  );
}

import { InfoIcon } from "./InfoIcon";

type ErrorMessageProps = {
  message: string | undefined;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <p className="text-orange-700 text-sm md:text-base flex gap-1 items-center">
      <InfoIcon />
      {message}
    </p>
  );
};

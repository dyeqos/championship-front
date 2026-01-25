import { cloneElement, isValidElement, type ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement<{ className: string }>;
}
export const TitleComponent = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center mb-2 gap-3">
      {isValidElement(icon) &&
        cloneElement(icon, {
          className: "h-5 w-5 text-primary",
        })}
      <h1 className="text-xl font-semibold mb-1">{title}</h1>
    </div>
  );
};

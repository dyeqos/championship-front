import { cloneElement, isValidElement, type ReactElement } from "react";

interface Props {
  title: string;
  icon: ReactElement<{ className: string }>;
}
export const TitleComponent = ({ title, icon }: Props) => {
  return (
    <div className="flex items-center gap-3">
      {isValidElement(icon) &&
        cloneElement(icon, {
          className: "h-7 w-7 text-primary",
        })}
      <h1 className="text-3xl font-bold">{title}</h1>
    </div>
  );
};

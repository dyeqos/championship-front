import { cn } from "@/platform/tools/lib/utils";

interface Props {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
}
export const TittleComponent = ({ children, title, subtitle }: Props) => {
  return (
    <div
      className={cn(
        "flex",
        children ? " justify-between items-center" : " items-center gap-3"
      )}
    >
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>
      </div>
      {children}
    </div>
  );
};

import {
  cloneElement,
  isValidElement,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Prop = PropsWithChildren<{
  title: string;
  icon?: ReactElement<{ className: string }>;
}>;
export const PanelComponent = ({ title, icon, children }: Prop) => {
  return (
    <Card>
      {title && (
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {isValidElement(icon) &&
              cloneElement(icon, {
                className: "h-5 w-5 ",
              })}
            {title}
          </CardTitle>
        </CardHeader>
      )}
      <CardContent>{children}</CardContent>
    </Card>
  );
};

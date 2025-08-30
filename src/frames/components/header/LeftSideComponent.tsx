import { use } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Trophy } from "lucide-react";
import { ButtonToggleContext } from "@/frames/context/ButtonToggleContext";

export const LeftSideComponent = () => {
  const { isOpenToggle, setOpenToggle } = use(ButtonToggleContext);

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        className="p-2"
        onClick={() => setOpenToggle(!isOpenToggle)}
      >
        <Menu className="h-5 w-5" />
      </Button>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <Trophy className="h-5 w-5 text-primary-foreground" />
        </div>
        <span className="text-lg font-semibold text-foreground">
          FootballAdmin
        </span>
      </div>
    </div>
  );
};

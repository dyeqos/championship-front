import { Button } from "@/components/ui/button";
import { Menu, Trophy } from "lucide-react";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LeftSideComponent = ({ setIsOpen }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        variant="ghost"
        size="sm"
        className="p-2"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
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

import { use } from "react";
import { Button } from "@/components/ui/button";
import { ButtonToggleContext } from "@/frames/context/ButtonToggleContext";
import { Trophy, X } from "lucide-react";

export const LogoComponent = () => {
  const { setMobileOpenToggle } = use(ButtonToggleContext);
  return (
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex aspect-square size-10 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 text-white">
          <Trophy className="size-5" />
        </div>
        <div>
          <h2 className="font-semibold">Campeonato</h2>
          <p className="text-xs text-muted-foreground">De futbol</p>
        </div>
      </div>
      <Button
        className="md:hidden"
        variant="ghost"
        size="icon"
        onClick={() => setMobileOpenToggle(false)}
      >
        <X className="h-5 w-5" />
      </Button>
    </div>
  );
};

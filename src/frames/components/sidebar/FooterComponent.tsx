import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Settings } from "lucide-react";

export const FooterComponent = () => {
  return (
    <div className="border-t p-3">
      <div className="space-y-1">
        <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
        <button className="flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium hover:bg-muted">
          <div className="flex items-center gap-3">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src="/placeholder.svg?height=32&width=32"
                alt="User"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <span>John Doe</span>
          </div>
          <Badge variant="outline" className="ml-auto">
            Pro
          </Badge>
        </button>
      </div>
    </div>
  );
};

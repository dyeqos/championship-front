import { useState } from "react";
import { sidebarItems } from "@/frames/mocks/SiderItemsMock";
import { cn } from "@/platform/tools/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronDown } from "lucide-react";

export const MenuItemsComponent = () => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );

  const toggleExpanded = (title: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };
  return (
    <ScrollArea className="flex-1 px-3 py-2">
      <div className="space-y-1">
        {sidebarItems.map((item) => (
          <div key={item.title} className="mb-1">
            <button
              className={cn(
                "flex w-full items-center justify-between rounded-2xl px-3 py-2 text-sm font-medium",
                item.isActive ? "bg-primary/10 text-primary" : "hover:bg-muted"
              )}
              onClick={() => item.items && toggleExpanded(item.title)}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span>{item.title}</span>
              </div>

              {item.items && (
                <ChevronDown
                  className={cn(
                    "ml-2 h-4 w-4 transition-transform",
                    expandedItems[item.title] ? "rotate-180" : ""
                  )}
                />
              )}
            </button>

            {item.items && expandedItems[item.title] && (
              <div className="mt-1 ml-6 space-y-1 border-l pl-3">
                {item.items.map((subItem) => (
                  <a
                    key={subItem.title}
                    href={subItem.url}
                    className="flex items-center justify-between rounded-2xl px-3 py-2 text-sm hover:bg-muted"
                  >
                    {subItem.title}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
};

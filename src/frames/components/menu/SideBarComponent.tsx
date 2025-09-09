import { use } from "react";
import { ButtonToggleContext } from "@/frames/context/ButtonToggleContext";
import { Home, Trophy, Users } from "lucide-react";
import { Link } from "react-router";

const navigation = [
  { name: "Dashboard", href: "/", icon: Home, current: true },
  {
    name: "Championships",
    href: "/championship",
    icon: Trophy,
    current: false,
  },
  { name: "Parametros", href: "/params", icon: Users, current: false },
];
export const SideBarComponent = () => {
  const { isOpenToggle, setOpenToggle } = use(ButtonToggleContext);
  return (
    <>
      {/* lg:translate-x-0 */}
      <aside
        className={`${
          isOpenToggle
            ? "translate-x-0 lg:translate-x-0 lg:static lg:inset-0 lg:mt-0 "
            : "-translate-x-full lg:mt-16 "
        } mt-16 sm:mt-16 md:mt-16 fixed inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out  *: *:`}
      >
        <div className="flex flex-col h-full pt-5 pb-4 overflow-y-auto">
          <nav className=" flex-1 px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                } group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors`}
              >
                <item.icon
                  className={`${
                    item.current
                      ? "text-sidebar-accent-foreground"
                      : "text-sidebar-foreground"
                  } mr-3 flex-shrink-0 h-5 w-5`}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpenToggle && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setOpenToggle(false)}
        />
      )}
    </>
  );
};

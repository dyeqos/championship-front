import { LeftSideComponent } from "./LeftSideComponent";
import { RightSideComponent } from "./RightSideComponent";

export const NavBarComponent = () => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <LeftSideComponent />
          <RightSideComponent />
        </div>
      </div>
    </nav>
  );
};

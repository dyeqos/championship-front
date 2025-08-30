import { LeftSideComponent } from "./LeftSideComponent";
import { RightSideComponent } from "./RightSideComponent";
interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const NavBarComponent = ({ setIsOpen }: Props) => {
  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <LeftSideComponent setIsOpen={setIsOpen} />
          <RightSideComponent />
        </div>
      </div>
    </nav>
  );
};

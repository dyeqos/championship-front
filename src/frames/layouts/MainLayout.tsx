import { use, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { motion } from "framer-motion";

import { cn } from "@/platform/tools/lib/utils";
import { SideBarComponent } from "../components/siedebar/SideBarComponent";
import { ButtonToggleContext } from "../context/ButtonToggleContext";
import { NavBarComponent } from "../components/header/NavBarComponent";

export function MainLayout() {
  const [progress, setProgress] = useState(0);

  const { isMobileOpenToggle, isOpenToggle, setMobileOpenToggle } =
    use(ButtonToggleContext);
  // Simulate progress loading
  useEffect(() => {
    const timer = setTimeout(() => setProgress(100), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 30% 70%, rgba(233, 30, 99, 0.5) 0%, rgba(81, 45, 168, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 70% 30%, rgba(76, 175, 80, 0.5) 0%, rgba(32, 119, 188, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
            "radial-gradient(circle at 50% 50%, rgba(120, 41, 190, 0.5) 0%, rgba(53, 71, 125, 0.5) 50%, rgba(0, 0, 0, 0) 100%)",
          ],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {/* Mobile menu overlay */}
      {isMobileOpenToggle && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpenToggle(false)}
        />
      )}

      {/* Sidebar - Mobile */}
      <SideBarComponent></SideBarComponent>

      {/* Main Content */}
      <div
        className={cn(
          "min-h-screen transition-all duration-300 ease-in-out",
          isOpenToggle ? "md:pl-64" : "md:pl-0"
        )}
      >
        {/* Header */}
        <NavBarComponent></NavBarComponent>

        <main className="flex-1 p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

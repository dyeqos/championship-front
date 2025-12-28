import { loadingStore } from "@/platform/store/LoadingStore";
import { AnimatePresence, motion } from "framer-motion";

export const LoadingComponent = () => {
  const isActive = loadingStore((state) => state.active);

  if (isActive) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-[1px] pointer-events-auto"
          role="status"
          aria-busy="true"
          aria-label="Loading content"
        >
          <div className="relative flex flex-col items-center gap-4 p-6  ">
            {/* Modern Animated Spinner */}
            <div className="relative h-12 w-12">
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
              <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
            <p className="text-md font-medium text-muted-foreground animate-pulse">
              Cargando datos...
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  } else {
    return <></>;
  }
};

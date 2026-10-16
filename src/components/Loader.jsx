
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

function Loader() {
  const { language } = useLanguage();

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black text-white"
      exit={{
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="flex w-[250px] flex-col items-center sm:w-[350px]">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3 font-archivo text-[11px] font-bold uppercase tracking-[0.3em]"
        >
          ARTHUR MANDÉ
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 font-archivo text-[36px] font-black italic tracking-[-0.05em] sm:text-[50px]"
        >
          PORTFOLIO
        </motion.h1>

        <div className="h-[3px] w-full overflow-hidden bg-white/20">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full bg-[#6A00FF]"
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-3 w-full text-left font-archivo text-[9px] font-bold tracking-[0.15em] text-white/60"
        >
          {language === "fr" ? "CHARGEMENT..." : "LOADING..."}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Loader;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Overview", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Initiatives", path: "/initiatives" },
  { label: "Walton Castle", path: "/walton-castle" },
  { label: "Publications", path: "/publications" },
  { label: "Advisory", path: "/advisory" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => setOpen(false), [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-hamilton ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        {/* Wordmark */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="font-serif text-base text-foreground tracking-tight">
            Hamilton Strategy Group
          </span>
          <span className="font-mono text-[9px] text-gold/60 uppercase tracking-widest mt-0.5">
            Est. London · Global Advisory
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-mono text-[10px] uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === item.path
                  ? "text-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/advisory" className="btn-ghost-gold ml-2">
            Advisory Inquiry
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted-foreground hover:text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-6 gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-mono text-[11px] uppercase tracking-widest ${
                    location.pathname === item.path
                      ? "text-gold"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

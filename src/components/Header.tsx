import {
  Menu,
  X,
  Shirt,
  GraduationCap,
  Truck,
  PhoneCall,
  IndianRupee,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const Header: React.FC = () => {
  const MotionNavLink = motion(NavLink);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // toggle shadow/background when user scrolls
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: NavLink[] = [
    { href: "#services", label: "Services", icon: Shirt },
    { href: "#students", label: "For Students", icon: GraduationCap },
    { href: "#pickup", label: "Pickup & Delivery", icon: Truck },
    { href: "#contact", label: "Contact", icon: PhoneCall },
  ];

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 20 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { ease: "easeOut" } },
    exit: { opacity: 0, height: 0, transition: { ease: "easeIn" } },
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-soft"
      }`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1, transition: { type: "spring", stiffness: 120 } }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={(e) => {
              // if already on home page, just scroll to top
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="w-10 h-10 md:w-12 md:h-12"
            >
              <img
                src="/logo.png"
                alt="TT Dry Cleaning"
                className="w-full h-full object-contain"
              />
            </motion.div>

            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="hidden sm:block"
            >
              <p className="font-bold text-lg leading-tight">
                <span className="text-black">TT</span>{" "}
                <span className="text-sky-600">Dry Cleaning</span>
              </p>
              <p className="text-xs text-muted-foreground">
                Laundry | Dry Cleaning | Ironing
              </p>
            </motion.div>
          </Link>

          {/* DESKTOP NAV */}
          <motion.nav
            className="hidden lg:flex items-center gap-10"
            initial="hidden"
            animate="visible"
          >
            {navLinks.map(({ href, label, icon: Icon }, idx) => {
              if (href.startsWith("#")) {
                return (
                  <motion.a
                    key={href}
                    href={href}
                    custom={idx}
                    variants={navItemVariants}
                    className="flex items-center gap-2 text-foreground/80 hover:text-sky-600 font-medium"
                    whileHover={{ scale: 1.05 }}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.querySelector(href);
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Icon className="w-4 h-4 text-sky-600/80" />
                    {label}
                  </motion.a>
                );
              }
              return (
                <MotionNavLink
                  key={href}
                  to={href}
                  custom={idx}
                  variants={navItemVariants}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-foreground/80 hover:text-sky-600 font-medium ${
                      isActive ? "text-sky-600" : ""
                    }`
                  }
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-4 h-4 text-sky-600/80" />
                  {label}
                </MotionNavLink>
              );
            })}
          </motion.nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP PRICE LIST */}
            <Button
              asChild
              className="hidden sm:flex bg-sky-600 hover:bg-sky-700"
            >
              <Link to="/price-list">
                <IndianRupee className="w-4 h-4 mr-2" />
                Price List
              </Link>
            </Button>

            {/* MOBILE MENU TOGGLE */}
            <motion.button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isMenuOpen ? 90 : 0, transition: { type: "spring", stiffness: 500 } }}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>

        {/* MOBILE NAV */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className="lg:hidden py-4 border-t overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex flex-col gap-1">

                {navLinks.map(({ href, label, icon: Icon }) => {
                  if (href.startsWith("#")) {
                    return (
                      <motion.a
                        key={href}
                        href={href}
                        variants={navItemVariants}
                        custom={0}
                        className="px-4 py-3 flex items-center gap-3 hover:bg-secondary rounded-lg"
                        onClick={(e) => {
                          e.preventDefault();
                          setIsMenuOpen(false);
                          const el = document.querySelector(href);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <Icon className="w-5 h-5 text-sky-600" />
                        {label}
                      </motion.a>
                    );
                  }
                  return (
                    <MotionNavLink
                      key={href}
                      to={href}
                      variants={navItemVariants}
                      custom={0}
                      className="px-4 py-3 flex items-center gap-3 hover:bg-secondary rounded-lg"
                      onClick={() => setIsMenuOpen(false)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Icon className="w-5 h-5 text-sky-600" />
                      {label}
                    </MotionNavLink>
                  );
                })}

                {/* MOBILE PRICE LIST */}
                <Link
                  to="/price-list"
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-2 mx-4 py-3 flex items-center justify-center gap-2 bg-sky-600 text-white rounded-lg font-semibold"
                >
                  <IndianRupee className="w-5 h-5" />
                  Price List
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;

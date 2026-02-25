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
import { useState, useRef, useLayoutEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type NavLink = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const Header: React.FC = () => {
  const MotionNavLink = motion(NavLink);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement>(null);

  // GSAP ScrollTrigger setup for header animations
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const headerEl = headerRef.current;
    if (!headerEl) return;

    const ctx = gsap.context(() => {
      // timeline for background/height
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: headerEl,
          start: "top top",
          end: "+=200",
          scrub: 0.3,
        },
      });

      tl.to(headerEl, {
        backdropFilter: "blur(20px)",
        backgroundColor: "rgba(255,255,255,0.95)",
        height: "4rem",
        ease: "none",
      });

      // hide/show header based on scroll direction
      ScrollTrigger.create({
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to(headerEl, { y: 0, duration: 0.3, ease: "power2.out" });
          } else {
            gsap.to(headerEl, { y: -headerEl.offsetHeight, duration: 0.3, ease: "power2.out" });
          }
        },
      });
    }, headerRef);

    return () => {
      ctx.revert();
      // kill any remaining ScrollTrigger instances since there's no static `kill` method
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  const navLinks: NavLink[] = [
    { href: "#services", label: "Services", icon: Shirt },
    { href: "#students", label: "For Students", icon: GraduationCap },
    { href: "#pickup", label: "Pickup & Delivery", icon: Truck },
    { href: "#contact", label: "Contact", icon: PhoneCall },
  ];

  // animation variants typed for framer-motion
  const logoVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 } as Transition,
    },
  };

  const navItemVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 } as Transition,
    }),
  };

  const mobileMenuVariants: Variants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: { ease: "easeOut" as any },
    } as any,
    exit: {
      opacity: 0,
      height: 0,
      transition: { ease: "easeIn" as any },
    } as any,
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md transition-shadow duration-300 shadow-soft"
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

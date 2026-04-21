import "./Navbar.css";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "home", href: "#hero" },
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // change lang
  const { t, i18n} = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    document.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    console.log(lang);
  };
 
  const languages = [
    { code: "en", name: "English", falg: "USA" },
    { code: "ar", name: "Arabic", falg: "YEM" },
  ];

  // eng change lang

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >

      <div className="container flex items-center justify-between">
      {/* My lang switcher */}
        <div className="flex justify-between">
          <ThemeToggle />
          <div className="glass-radio-group">
            <input defaultChecked={true} type="radio" name="plan" id="glass-gold" />
            <label
              onClick={() => changeLanguage(languages[1].code)}
              htmlFor="glass-gold"
            >
              {t("navbar.langAR")}
            </label>

            <input defaultChecked={false} type="radio" name="plan" id="glass-platinum" />
            <label
              onClick={() => changeLanguage(languages[0].code)}
              htmlFor="glass-platinum"
            >
              {t("navbar.langEN")}
            </label>

            <div className="glass-glider"></div>
          </div>
          {/* --------- */}
        </div>

        <a
          className="text-xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> {t("")} </span> {t("")}
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {t(`navbar.${item.name}`)}
              {/* {item.name} */}
            </a>
          ))}
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50 cursor-pointer"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(`navbar.${item.name}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

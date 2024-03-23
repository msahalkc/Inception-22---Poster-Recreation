import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  MenuItem,
} from "@nextui-org/react";
import KCLogo from "../assets/kc designs logo.svg";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { label: "Portfolio", url: "https://msahalkc.netlify.app" },
    { label: "Behance", url: "https://behance.net/msahalkc" },
    { label: "Github", url: "https://github.com/msahalkc" },
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          <img src={KCLogo} width="60px" alt="KC Designs Logo" />
          <p className="font-semibold text-inherit font-kanit">
            muhammed <br />
            sahal kc
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="https://msahalkc.netlify.app">
            Portfolio
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://behance.net/msahalkc">
            Behance
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="https://github.com/msahalkc">
            Github
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="sm:hidden"
      />
      <NavbarMenu className="pt-10 font-[Outfit] flex items-center">
        {menuItems.map((menuItem) => (
          <NavbarMenuItem key={menuItem.label}>
            <Link
              className="w-full text-black"
              href={MenuItem.url}
              size="lg"
            >
              {menuItem.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}

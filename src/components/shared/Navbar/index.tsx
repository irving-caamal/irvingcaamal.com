import * as React from "react";
import { useRouter } from "next/router";
import { AppNavBar, setItemActive, NavItemT } from "baseui/app-nav-bar";
import { ChevronDown, Delete, Overflow } from "baseui/icon";
import {
  GitHub,
  Linkedin,
  Monitor,
  Home,
  BarChart,
  Layers
} from "react-feather";

const socialLinks = [
  {
    icon: Linkedin,
    label: "Linkedin",
    href: "https://www.linkedin.com/in/irving-caamal/"
  },
  { icon: GitHub, label: "Github", href: "github.com/" },
  { icon: Overflow, label: "SO", href: "" }
];
const NavBar: React.FC = function () {
  const router = useRouter();
  const [mainItems, setMainItems] = React.useState<NavItemT[]>([
    { icon: Home, label: "Home", active: true, info: "/", children: [] },
    {
      active: false,
      icon: ChevronDown,
      label: "About Me",
      navExitIcon: Delete,
      children: [
        {
          icon: Monitor,
          label: "Tech Stack",
          info: {
            pathname: "/stack",
            query: { name: "Stack" },
            disabled: false
          }
        },
        {
          icon: BarChart,
          label: "Experience",
          info: {
            pathname: "/experience",
            disabled: false
          }
        },
        {
          icon: Layers,
          label: "Projects",
          info: {
            pathname: "/projects",
            disabled: false
          }
        }
      ]
    }
  ]);

  function handleMainItemSelect(item: NavItemT) {
    if (item.info && item.info.disabled) return false;
    setMainItems((prev) => setItemActive(prev, item));
    if (item.info) {
      router.push(item.info);
    }
    return true;
  }
  function handleUserItemSelect(item: NavItemT) {
    // get selected social link
    const selected = socialLinks.find(
      (socialLink) => socialLink.label === item.label
    );
    // if selected, open in new tab
    selected && window.open(selected.href, "_blank");
  }
  return (
    <AppNavBar
      title="Irving Caamal"
      mainItems={mainItems}
      onMainItemSelect={handleMainItemSelect}
      username="Irving Caamal"
      usernameSubtitle="Connect with me"
      userItems={[
        { icon: Linkedin, label: "Linkedin" },
        { icon: GitHub, label: "Github" },
        { icon: Overflow, label: "SO" }
      ]}
      onUserItemSelect={handleUserItemSelect}
    />
  );
};

export { NavBar };

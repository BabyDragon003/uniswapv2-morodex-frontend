import ItemsMock from "../DropdownMenu/mock";

const MenuItemsMock = [
  {
    label: "Home",
    href: "/",
    items: ItemsMock,
  },
  {
    label: "Earn",
    items: [ItemsMock[0]],
  },
  {
    label: "...",
    href: "/",
    items: ItemsMock,
  },
];

export default MenuItemsMock;

import { FaAngleDown } from 'react-icons/fa';
export const Horcontent = [
    {
        name: "Home",
        to: "/",
    },
    {
        name: "About Us",
        to: "/About", // Ensure lowercase "about" to match the route
    },
    {
        name: "Products",
        to: "/Products",
        icon: <FaAngleDown />,
    },
    {
        name: "Promotions",
        to: "/Promotions",
    },
    {
        name: "Blog",
        to: "/Blog",
    },
    {
        name: "Contact",
        to: "/Contact",
    }
];

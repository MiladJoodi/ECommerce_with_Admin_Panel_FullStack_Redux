"use client"
import { MdDashboard, MdManageAccounts } from "react-icons/md"
import { GrTransaction } from "react-icons/gr"
import { IoAnalytics, IoSettings } from "react-icons/io5"
import { RiShoppingCartLine } from "react-icons/ri"
import Link from "next/link"
import { usePathname } from "next/navigation"

const menus = [
    {
        title: "Dashboard",
        icon: <MdDashboard />,
        href: "/admin/dashboard",
    },
    {
        title: "Products",
        icon: <RiShoppingCartLine />,
        href: "/admin/products",
    },
    {
        title: "Account",
        icon: <MdManageAccounts />,
        href: "#",
    },
    {
        title: "Transactions",
        icon: <GrTransaction />,
        href: "#",
    },
    {
        title: "Analytics",
        icon: <IoAnalytics />,
        href: "#",
    },
    {
        title: "Setting",
        icon: <IoSettings />,
        href: "#",
    },
]

function Sidebar() {

    const pathName = usePathname()

    return (
        <div className="bg-white w-[300px] min-h-screen p-4 shrink-0">
            <div className="flex items-center gap-4">
                <img src="/logo.png" className="size-12 rounded-lg" alt="" />
                <h2 className="text-[20px] font-semibold">Joodi</h2>
            </div>

            <ul className="space-y-4 mt-6">
                {menus.map((menu)=>(
                    <Link 
                    href={menu.href} 
                    key={menu.title} 
                    className={`flex gap-2 items-center p-4 rounded-lg cursor-pointer hover:bg-pink hover:text-white ${pathName === menu.href ? "bg-pink text-white" : "bg-gray-200"}`}
                    >
                        <div className="text-[20px]">{menu.icon}</div>
                        <p>{menu.title}</p>
                    </Link>
                ))}
            </ul>

        </div>

    )
}

export default Sidebar
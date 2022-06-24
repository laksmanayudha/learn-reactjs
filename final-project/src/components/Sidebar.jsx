import SidebarItem from "./SidebarItem";
import logo from "../YuKerja_logo.png"
import { HomeIcon, PasswordIcon, ProfileIcon, TableIcon } from "./SVGIcons";

const Sidebar = () => {
    return(
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                <div className="flex items-center justify-center pt-6">
                    <img src={logo} alt="Yuk Kerja Logo" className="w-1/3"/>
                </div>
                <nav className="mt-6">
                    <div>
                        <SidebarItem name="Dashboard" icon={<HomeIcon />} to="/dashboard"/>
                        <SidebarItem name="Profile" icon={<ProfileIcon />} to="/dashboard/profile"/>
                        <SidebarItem name="Job Vacancy" icon={<TableIcon />} to="/dashboard/list-job-vacancy" />
                        <SidebarItem name="Change Password" icon={<PasswordIcon />} to="/dashboard/change-password"/>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sidebar;
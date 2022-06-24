import DashboardCard from "./DashboardCard";

const Dashboard = () => {
    return(
       <div className="p-4 font-bold text-4xl">
        Hello, Users !!
            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-6 gap-4">
                <DashboardCard name="Dashboard" to="/dashboard" description="New information is available here." buttondesc="Get started"/>
                <DashboardCard name="Profile" to="/dashboard/profile" description="Check your profile by clicking this card." buttondesc="My profile"/>
                <DashboardCard name="Job Vacancy" to="/dashboard/list-job-vacancy" description="Find your prefered job." buttondesc="Job List"/>
                <DashboardCard name="Change Password" to="/dashboard/change-password" description="Change password for better security." buttondesc="Change password"/>
            </div>
       </div>
    )
}

export default Dashboard;
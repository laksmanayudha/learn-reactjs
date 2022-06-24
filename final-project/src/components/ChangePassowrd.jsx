import { InputFormWithLabel } from "./InputForm";
import { Button } from "./Button";

const ChangePassword = (props) => {
    return (
        <div className="p-10 container bg-white rounded h-full">
            <h1 className="font-bold font-normal text-4xl">Change Password</h1>
            <div className="p-10 w-3/4 mx-auto">
                
                <form >
                    <InputFormWithLabel type="password" label="Current Password" name="current_password" placeholder="Current Password..." />
                    <InputFormWithLabel type="password" label="New Password" name="new_password" placeholder="New Password..." />
                    <InputFormWithLabel type="password" label="Confirm New Password" name="new_confirm_password" placeholder="Confirm New Password..." />
                    <Button name="Change password"/>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;
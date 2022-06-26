import { InputFormWithLabel } from "./InputForm";
import { Button } from "./Button";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";
import { DangerAlert, SuccesAlert } from "./Alert";

const ChangePassword = (props) => {

    const {state, handleFunction} = useContext(AuthContext);
    const {
        changePasswordStatus,
        alert,
        setAlert,
        setChangePasswordStatus
    } = state;

    const {
        handleSubmitChangePassword, 
        handleChangePassword,
    } = handleFunction;

    useEffect(() => {
        return () => {
            setAlert(false);
            setChangePasswordStatus(false)
        }

    }, [])

    return (
        <div className="p-10 container bg-white rounded">
            <h1 className="font-bold font-normal text-3xl">Change Password</h1>
            <div className="p-10 w-3/4 mx-auto">
                {(alert && changePasswordStatus) && <div className="mb-4"><SuccesAlert message="change password succes" /></ div>}
                {(alert && (!changePasswordStatus)) && <div className="mb-4"><DangerAlert message="failed to change password" /></ div>}

                <form onSubmit={handleSubmitChangePassword}>
                    <InputFormWithLabel type="password" label="Current Password" name="current_password" placeholder="Current Password..." handleFunction={handleChangePassword}/>
                    <InputFormWithLabel type="password" label="New Password" name="new_password" placeholder="New Password..." handleFunction={handleChangePassword}/>
                    <InputFormWithLabel type="password" label="Confirm New Password" name="new_confirm_password" placeholder="Confirm New Password..." handleFunction={handleChangePassword}/>
                    <Button name="Change password"/>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;
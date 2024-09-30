type Props = {};

import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../auth/authConfig.ts";

function TestLogin({}: Props) {
  const { instance, accounts } = useMsal();

  const handleLogin = () => {
    instance.loginPopup(loginRequest).catch((e) => {
      console.error(e);
    });
  };

  const handleLogout = () => {
    instance.logoutPopup().catch((e) => {
      console.error(e);
    });
  };

  return (
    <div>
      {accounts.length > 0 ? (
        <>
          <p>Welcome, {accounts[0].name}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login with Microsoft</button>
      )}
    </div>
  );
}

export default TestLogin;

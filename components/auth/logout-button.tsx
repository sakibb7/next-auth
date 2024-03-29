import { logout } from "@/actions/logout";
import React from "react";

function LogoutButton({ children }: { children?: React.ReactNode }) {
  const onClick = () => {
    logout();
  };

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
}

export default LogoutButton;

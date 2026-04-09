import { createContext, PropsWithChildren, useContext, useState } from "react";

type Role = "client" | "pro";

type RoleContextType = {
  role: Role;
  switchRole: () => void;
};

const RoleContext = createContext<RoleContextType>({
  role: "client",
  switchRole: () => {},
});

export function RoleProvider({ children }: PropsWithChildren) {
  const [role, setRole] = useState<Role>("client");
  const switchRole = () => setRole((r) => (r == "client" ? "pro" : "client"));

  return (
    <RoleContext.Provider value={{ role, switchRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export const useRole = () => useContext(RoleContext);

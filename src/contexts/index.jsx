import { UserProvider } from "./UserContext";
import { TechProvider } from "./TechContext";

export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

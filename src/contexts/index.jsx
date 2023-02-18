import { UserProvider } from "./UserContext";
import { TechProvider } from "./TechContext";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TechProvider>{children}</TechProvider>
    </UserProvider>
  );
};

export default Providers;

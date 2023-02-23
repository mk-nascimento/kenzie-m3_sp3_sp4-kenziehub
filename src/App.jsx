import { Providers } from "./contexts";
import { AppRoutes } from "./routes";

export const App = () => {
  return (
    <>
      <Providers>
        <AppRoutes />
      </Providers>
    </>
  );
};

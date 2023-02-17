import Providers from "./contexts";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Providers>
        <AppRoutes />
      </Providers>
    </>
  );
}

export default App;

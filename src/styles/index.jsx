import Reset from "./reset.js";
import Layouts from "./layouts.js";
import Global from "./global.js";
import Colors from "./colors.js";
import Typography from "./typography.js";

const GlobalStyles = () => {
  return (
    <>
      <Reset />

      <Layouts />

      <Global />

      <Colors />

      <Typography />
    </>
  );
};

export default GlobalStyles;

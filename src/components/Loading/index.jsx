import { Spinner } from "./styles";
import SpinnerSvg from "/src/assets/spinner.svg";

export const LoadingComponent = ({ height }) => {
  return <Spinner src={SpinnerSvg} alt="loading" height={height} />;
};

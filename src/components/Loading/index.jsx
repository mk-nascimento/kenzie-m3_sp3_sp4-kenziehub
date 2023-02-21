import Spinner from "./styles";
import SpinnerSvg from "/src/assets/spinner.svg";

const LoadingComponent = ({ height }) => {
  return <Spinner src={SpinnerSvg} alt="loading" height={height} />;
};

export default LoadingComponent;

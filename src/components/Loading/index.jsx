import Spinner from "./styled";
import SpinnerSvg from "/src/assets/spinner.svg";

const Loading = () => {
  return <Spinner src={SpinnerSvg} alt="loading" height="200px" />;
};

export default Loading;

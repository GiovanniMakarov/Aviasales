import { MagnifyingGlass } from "react-loader-spinner";

export default function Spinner() {
  return (
    <MagnifyingGlass
      visible
      height="60"
      width="60"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#53abf2"
    />
  );
}

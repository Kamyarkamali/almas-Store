import { Oval } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center items-center h-[500px] flex-col gap-3">
      <Oval
        height="80"
        width="80"
        color="green"
        ariaLabel="three-dots-loading"
      />
      <h3 className="text-xl text-green-600 font-bold">درحال لود شدن ...</h3>
    </div>
  );
}

export default Loader;

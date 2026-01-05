import FailComponent from "./Fail";
import SuccessComponent from "./Success";

const CheckoutStatusView = () => {
    return (
        <div className="bg-[#f3f4f6] min-h-[calc(100vh-82px)] tab:pt-3">
            {/* <FailComponent /> */}
            <SuccessComponent />
        </div>
    );
};

export default CheckoutStatusView;

import { ToastContainer, toast } from "react-toastify";
import { ShowToastOptions, ToastType } from "./type";

const contextClass = {
    [ToastType.SUCCESS]: {
        bg: "bg-white",
        title: "text-[#2196F3]"
    },
    [ToastType.ERROR]: {
        bg: "bg-white",
        title: "text-red-400"
    },
    [ToastType.WARNING]: {
        bg: "bg-white",
        title: "text-orange-400"
    },
    [ToastType.INFO]: {
        bg: "bg-white",
        title: "text-blue-400"
    },
    [ToastType.DEFAULT]: {
        bg: "bg-white",
        title: "text-blue-400"
    }
};

const CloseButton = ({ closeToast }: any) => (
    <button
        onClick={closeToast}
        className="absolute cursor-pointer right-3 top-3 text-gray-400 hover:text-gray-600 transition"
        aria-label="close"
    >
        ✕
    </button>
);

const Msg = ({ title = "Thông báo", description = "Mô tả", type }: ShowToastOptions) => {
    const context = contextClass[type ?? ToastType.DEFAULT];

    return (
        <div>
            <p className={`font-bold ${context.title}`}>{title}</p>
            {description && <p className="text-[#374151] mt-1 text-sm leading-5">{description}</p>}
        </div>
    );
};

export const showToast = ({ type, title, description }: ShowToastOptions) => {
    toast(<Msg title={title} description={description} type={type} />, { type: type });
};

export const Toast = () => {
    return (
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            closeOnClick
            pauseOnHover
            icon={false}
            closeButton={CloseButton}
            toastClassName="rounded-lg! shadow-lg! border border-[#D1D5DB] overflow-hidden! p-6! bg-white w-[320px]! tab:w-[360px]! max-tab:mr-3! max-tab:mt-3!"
            progressClassName={(context) => `${context?.defaultClassName}`}
        />
    );
};

import { CloseCircleIcon } from "module/_core/app/icon/CloseCircleIcon";
import { ExclamationCircleIcon } from "module/_core/app/icon/ExclamationCircleIcon";
import { InformationCircleIcon } from "module/_core/app/icon/InformationCircleIcon";
import { TickCircleIcon } from "module/_core/app/icon/TickCircleIcon";
import { ToastContainer, toast } from "react-toastify";
import { ShowToastOptions, ToastType } from "./type";

const contextClass = {
    [ToastType.SUCCESS]: {
        bg: "bg-white",
        title: "text-green-400",
        progress: "bg-green-400",
        color: "#4ade80",
        Icon: TickCircleIcon
    },
    [ToastType.ERROR]: {
        bg: "bg-white",
        title: "text-red-400",
        progress: "bg-red-400",
        color: "#f87171",
        Icon: CloseCircleIcon
    },
    [ToastType.WARNING]: {
        bg: "bg-white",
        title: "text-orange-400",
        progress: "bg-orange-400",
        color: "#fb923c",
        Icon: ExclamationCircleIcon
    },
    [ToastType.INFO]: {
        bg: "bg-white",
        title: "text-blue-400",
        progress: "bg-blue-400",
        color: "#60a5fa",
        Icon: InformationCircleIcon
    },
    [ToastType.DEFAULT]: {
        bg: "bg-white",
        title: "text-blue-400",
        progress: "bg-blue-400",
        color: "#60a5fa",
        Icon: InformationCircleIcon
    }
};

const CloseButton = ({ closeToast }: any) => (
    <button
        onClick={closeToast}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600 transition"
        aria-label="close"
    >
        ✕
    </button>
);

const Msg = ({ title = "Thông báo", description = "Mô tả", type }: ShowToastOptions) => {
    const context = contextClass[type ?? ToastType.DEFAULT];

    return (
        <div className="p-4 pr-8 max-w-[350px]">
            <div className="mt-0.5 flex gap-2 items-center">
                <context.Icon className="h-6 w-6" color={context.color} type="fill" />
                <p className={`font-semibold ${context.title}`}>{title}</p>
            </div>
            {description && <p className="text-gray-500 mt-2 ml-8">{description}</p>}
        </div>
    );
};

export const showToast = ({ type, title, description }: ShowToastOptions) => {
    toast(<Msg title={title} description={description} type={type} />, { type: type });
};

export const Toast = () => {
    return (
        <ToastContainer
            position="bottom-left"
            autoClose={3000}
            hideProgressBar={false}
            closeOnClick
            pauseOnHover
            icon={false}
            closeButton={CloseButton}
            toastClassName={() => "rounded shadow-lg border border-gray-100 overflow-hidden p-0 bg-white"}
            progressClassName={(context) =>
                `${context?.defaultClassName} ${contextClass[context?.type ?? ToastType.DEFAULT].progress}`
            }
        />
    );
};

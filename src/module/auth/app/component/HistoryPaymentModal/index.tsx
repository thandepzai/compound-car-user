import Modal from "@module/_core/app/component/Modal";
import { forwardRef, useImperativeHandle, useState } from "react";
import { UserSubscriptionDTO } from "@module/auth/domain/dto/auth";
import HistoryPayment from "../HistoryPayment";

interface HistoryPaymentModalHandler {
    open: () => void;
}
interface HistoryPaymentModalProps {
    userSubscription: UserSubscriptionDTO;
}
const HistoryPaymentModal = forwardRef<HistoryPaymentModalHandler, HistoryPaymentModalProps>(
    ({ userSubscription }, ref) => {
        const [isModalOpen, setIsModalOpen] = useState(false);

        useImperativeHandle(ref, () => ({
            open: () => setIsModalOpen(true)
        }));

        const onClose = () => setIsModalOpen(false);

        return (
            <Modal open={isModalOpen} className="w-[488px] mx-4 p-5!" onClose={onClose}>
                <HistoryPayment onBack={onClose} userSubscription={userSubscription} />
            </Modal>
        );
    }
);

export default HistoryPaymentModal;

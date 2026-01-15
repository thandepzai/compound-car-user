import Slide from "@module/_core/app/component/Slide";
import { UserSubscriptionDTO } from "@module/auth/domain/dto/auth";
import { forwardRef, useImperativeHandle, useState } from "react";
import HistoryPayment from "../HistoryPayment";

interface HistoryPaymentSlideHandler {
    open: () => void;
}

interface HistoryPaymentSlideProps {
    userSubscription: UserSubscriptionDTO;
}

const HistoryPaymentSlide = forwardRef<HistoryPaymentSlideHandler, HistoryPaymentSlideProps>(
    ({ userSubscription }, ref) => {
        const [open, setOpen] = useState(false);

        useImperativeHandle(ref, () => ({
            open: () => setOpen(true)
        }));

        const onClose = () => setOpen(false);

        return (
            <Slide open={open} direction="right" duration={0.2} width="100vw" onClose={onClose} zIndex={1100}>
                <HistoryPayment userSubscription={userSubscription} onBack={onClose} />
            </Slide>
        );
    }
);

export default HistoryPaymentSlide;

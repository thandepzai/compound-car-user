import HistoryPaymentModal from "@module/auth/app/component/HistoryPaymentModal";
import HistoryPaymentSlide from "@module/auth/app/component/HistoryPaymentSlide";
import InfoSlide from "@module/auth/app/component/InfoSlide";
import LoginModal from "@module/auth/app/component/LoginModal";
import LoginSlide from "@module/auth/app/component/LoginSlide";
import { createRef, ComponentRef } from "react";

export const authUIController = {
    loginModalRef: createRef<ComponentRef<typeof LoginModal>>(),
    loginSlideRef: createRef<ComponentRef<typeof LoginSlide>>(),
    historyPaymentModalRef: createRef<ComponentRef<typeof HistoryPaymentModal>>(),
    historyPaymentSlideRef: createRef<ComponentRef<typeof HistoryPaymentSlide>>(),
    infoSlideRef: createRef<ComponentRef<typeof InfoSlide>>(),

    openLogin(isMobile?: boolean) {
        if (isMobile) this.loginSlideRef.current?.open();
        else this.loginModalRef.current?.open();
    },

    handleCheckoutWithAuth(isMobile: boolean, planId: number) {
        if (isMobile) this.loginSlideRef.current?.open(planId);
        else this.loginModalRef.current?.open(planId);
    },

    openHistory() {
        this.historyPaymentModalRef.current?.open();
    },

    openInfo() {
        this.infoSlideRef.current?.open();
    }
};

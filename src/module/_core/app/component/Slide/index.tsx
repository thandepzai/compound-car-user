"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import React, { useEffect } from "react";

type SlideDirection = "left" | "right" | "up" | "down";

interface DrawerSlideProps {
    open: boolean;
    children: React.ReactNode;
    direction?: SlideDirection;
    duration?: number;
    zIndex?: number;
    mask?: boolean;
    width?: number | string; // for left/right
    height?: number | string; // for up/down
    onClose?: () => void;
}

export default function DrawerSlide({
    open,
    children,
    direction = "right",
    duration = 0.3,
    zIndex = 1000,
    mask = true,
    width = 360,
    height = 360,
    onClose
}: DrawerSlideProps) {
    const variants = {
        left: {
            hidden: { x: "-100%" },
            visible: { x: 0 },
            exit: { x: "-100%" }
        },
        right: {
            hidden: { x: "100%" },
            visible: { x: 0 },
            exit: { x: "100%" }
        },
        up: {
            hidden: { y: "100%" },
            visible: { y: 0 },
            exit: { y: "100%" }
        },
        down: {
            hidden: { y: "-100%" },
            visible: { y: 0 },
            exit: { y: "-100%" }
        }
    };

    // 🔒 Lock body scroll
    useEffect(() => {
        if (!open) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [open]);

    if (typeof window === "undefined") return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <>
                    {/* Mask */}
                    {mask && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.4 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration }}
                            onClick={onClose}
                            style={{
                                position: "fixed",
                                inset: 0,
                                background: "#000",
                                zIndex
                            }}
                        />
                    )}

                    {/* Drawer */}
                    <motion.div
                        variants={variants[direction]}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration, ease: "easeOut" }}
                        style={{
                            position: "fixed",
                            top: direction === "up" ? undefined : 0,
                            bottom: direction === "down" ? undefined : 0,
                            left: direction === "left" ? 0 : undefined,
                            right: direction === "right" ? 0 : undefined,
                            width: direction === "left" || direction === "right" ? width : "100vw",
                            height: direction === "up" || direction === "down" ? height : "100vh",
                            background: "#fff",
                            zIndex: zIndex + 1,
                            overflow: "auto"
                        }}
                    >
                        {children}
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}

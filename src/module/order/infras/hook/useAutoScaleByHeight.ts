import { useEffect, useState } from "react";

export function useAutoScaleByHeight(designHeight: number, minScale = 0.75, maxScale = 1) {
    const [scale, setScale] = useState(1);
    const [windowHeight, setWindowHeight] = useState<number>(0);

    useEffect(() => {
        const updateScale = () => {
            const vh = window.innerHeight - 106;

            setWindowHeight(vh);

            const nextScale = vh / designHeight;
            const clampedScale = Math.min(maxScale, Math.max(minScale, nextScale));

            setScale(clampedScale);
        };

        updateScale();
        window.addEventListener("resize", updateScale);
        return () => window.removeEventListener("resize", updateScale);
    }, [designHeight, minScale, maxScale]);

    return {
        scale,
        windowHeight
    };
}

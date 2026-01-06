import type { RefObject } from "react";

// remove all dirtyValues from object
export const cleanObject = <T extends Record<string, any>>(object: T, dirtyValues: any[] = [undefined]): Partial<T> => {
    const newObject: Partial<T> = {};

    (Object.keys(object) as Array<keyof T>).forEach((key) => {
        if (
            !dirtyValues.some((value) => {
                if (Number.isNaN(value)) return Number.isNaN(object[key]);
                return value === object[key];
            })
        ) {
            newObject[key] = object[key];
        }
    });

    return newObject;
};

// remove all dirtyValues from array
export const cleanArray = <T>(array: any[], dirtyValues: any[] = [undefined]): T[] => {
    return array.filter((el) => {
        return !dirtyValues.some((value) => {
            if (Number.isNaN(value)) return Number.isNaN(el);
            return value === el;
        });
    }) as T[];
};

// empty Object
export const emptyObject = {};

// empty Func
export const emptyFunc = () => {};

// random an item from an array
export function randomItem(items: Array<any>) {
    return items[Math.floor(Math.random() * items.length)];
}

/*
delay in millisecond, used in async function. example:
async () => {
    do something 
    await delay(1000);
    do somthing 
}
*/
export const delay = (m: number) => new Promise((r) => setTimeout(r, m));

// throttle by limit time, search throttle for more detail
export const throttle = (lockRef: RefObject<any>, callback: () => void, limit: number) => {
    if (lockRef.current) return;

    callback();
    lockRef.current = true;
    setTimeout(function () {
        lockRef.current = false;
    }, limit);
};

// debound by delay time, search debound for more detail
export const debounce = function (timeOutRef: RefObject<any>, callback: () => void, delay: number) {
    if (timeOutRef.current) clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(callback, delay);
    return () => {
        if (timeOutRef.current) clearTimeout(timeOutRef.current);
    };
};

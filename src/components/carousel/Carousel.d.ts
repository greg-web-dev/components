import { FunctionComponent } from "react";
interface CarouselProps {
    className?: string;
    onChange?: (activeIndex: number) => void;
    auto?: boolean;
}
export declare const Carousel: FunctionComponent<CarouselProps>;
export {};

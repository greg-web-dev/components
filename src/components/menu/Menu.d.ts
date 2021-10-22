/// <reference types="react" />
interface MenuBtnProps {
    active?: boolean;
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export declare const MenuBtn: (props: MenuBtnProps) => JSX.Element;
interface MenuProps {
    active: boolean;
    onClick: () => void;
    menuOptions: {
        name: string;
        url: string;
    }[];
}
export declare const Menu: (props: MenuProps) => JSX.Element;
export {};

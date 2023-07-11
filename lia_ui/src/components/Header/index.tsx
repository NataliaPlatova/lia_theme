import "./header.css";
import React from "react";

interface IHeaderProps {
    children: React.ReactNode | JSX.Element
}

const Header = (props: IHeaderProps) => {
    return (
        <div className="lia__header">
            {props.children}
        </div>
    );
};

export default Header;

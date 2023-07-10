import Content from "../../Content";
import Header from "../../Header";
import Sidebar from "../../Sidebar";

import s from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={s.lia__layout}>
            <Sidebar />
            <div className={s.lia__layoutPage}>
                <Header />
                <Content />
            </div>
        </div>
    );
};

export default Layout;

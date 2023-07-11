import Content from "../../Content";
import Header from "../../Header";
import PageNavigation from "../../PageNavigation";
import Sidebar from "../../Sidebar";
import ThemeSwitcher from "../../ThemeSwitcher";

import "./layout.css";

const Layout = () => {
    return (
        <div className="lia__layout">
            <Sidebar />
            <div className="lia__layout_page">
                <Header>
                    <span>
                        <a href="/">Home Link</a>
                    </span>
                    <div className="lia__header__linkGroup">
                        <span>
                            <a href="/">link1</a>
                        </span>
                        <span>
                            <a href="/">link2</a>
                        </span>
                        <ThemeSwitcher />
                    </div>
                </Header>
                <Content />
                <PageNavigation />
            </div>
        </div>
    );
};

export default Layout;

import s from "./Header.module.css";

const Header = () => {
    return <div className={s.lia__header}>
        <span><a href="/">Home Link</a></span>
        <div className={s.lia__header__linkGroup}>
            <span><a href="/">link1</a></span>
            <span><a href="/">link2</a></span>
        </div>
    </div>
};

export default Header;

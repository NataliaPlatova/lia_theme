import s from "./Admonition.module.css";

const Admonition = () => {
    return (
        <div className={`${s.lia__admonition_danger} ${s.lia__admonition}`}>
            <h4>Admonition danger</h4>
            <p>Important text</p>
        </div>
    );
};

export default Admonition;
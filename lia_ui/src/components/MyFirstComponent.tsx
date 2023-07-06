type MyFirstComponentProps = {
    text: string;
};

const MyFirstComponent = (props: MyFirstComponentProps) => {
    const { text } = props;
    return (
        <>
            <h1>{text}</h1>
        </>
    );
};

export default MyFirstComponent;

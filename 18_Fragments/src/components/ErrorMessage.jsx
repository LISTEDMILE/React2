const ErrorMessage = ({ items }) => {
    return (
        <>
            {items.length === 0 && <h3>
                No Item
            </h3>}
        </>
    )
};

export default ErrorMessage;
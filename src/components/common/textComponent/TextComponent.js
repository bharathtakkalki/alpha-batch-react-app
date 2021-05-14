const TextComponent = ({className="", size="large", heading, paragraph }) => {
    return (
        <div className={`text-component ${size} ${className}`}>
            <h3>{heading}</h3>
            <p>{paragraph}</p>
        </div>
    );
};

export default TextComponent;

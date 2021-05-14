import Header from "../common/header/Header";
import logo from "../../logo.svg";
import Tag from "../common/tag/Tag";
import TextComponent from "../common/textComponent/TextComponent";
import { Fragment } from "react";

const Home = (props) => {
    return (
        <Fragment>
            <Header selected="HOME" />
            <div className="home">
                <div className="first-section">
                    <div className="image-container">
                        <img src="https://picsum.photos/200/300" alt="image" />
                    </div>
                    <TextComponent
                        className="first-section-text"
                        heading="Hi There!"
                        paragraph="Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below."
                    />
                </div>
                <div className="second-section">
                    <TextComponent
                    className="second-section-text"
                        size="medium"
                        heading="Hi There!"
                        paragraph="Fuelled by a passion for designing compelling products, I have a deep desire to excel and continuously improve in my work. Learn more about my journey below."
                    />
                    <div className="tag-container">
                        <Tag text="Full Stack Developer" />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;

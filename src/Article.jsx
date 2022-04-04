import React from "react";

import picture from "../src/assets/picture.jpg";
import { dummyText } from "./assets/dummy-text";

const Article = () => {
    return (
        <div>
            <h1>Article Heading</h1>
            <img src={picture} className="img-fluid mb-3" />
            {dummyText}
        </div>
    );
}
export default Article;

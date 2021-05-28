import React from "react";

function Article (prop) {

    function minRead() {
        let min = prop.minutes;
        let retString = "";
        if (min < 30) {
            for (let i = Math.round(min/5); i >= 0; i--) {
                retString += `☕`;
            }
        } else if (min >= 30) {
            for (let i = Math.round(min/10); i >= 0; i--) {
                retString += `🍱`;
            }
        }

        return retString + ` ` + min + `min read`;
    }
    
    return (
        <article>
            <h3>{prop.title}</h3>
            <small>{(prop.date == null) ? `January 1, 1970` : prop.date}. {minRead()}</small>
            <p>{prop.preview}</p>
        </article>
    );
}

export default Article;
import React from "react";
import Article from "./Article";

function ArticleList ({posts}) {
    
    const items = [...posts];
    const itemsToDisplay = items.map((item) => {
        return (
            <Article key={item.id} title={item.title} date={item.date} preview={item.preview} minutes={item.minutes} />
        );
    })

    return (
        <main>
            {itemsToDisplay}
        </main>
    );
}

export default ArticleList;
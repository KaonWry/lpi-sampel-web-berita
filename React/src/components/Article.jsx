import React from 'react';

const Article = ({ article }) => {
    if (!article) return null;

    return (
        <div className="article">
            <h1 id="title-text">{article.title}</h1>
            <img id="hero-image" src={article.hero} alt={article.title} />
            <ul className="body-content" id="body-content">
                {article.body.map((block, index) => {
                    if (block.type === 'paragraph') {
                        return <li key={index}>{block.content}</li>;
                    } else if (block.type === 'image') {
                        return <li key={index}><img src={block.content} alt="Image" style={{ maxWidth: '100%' }} /></li>;
                    }
                    return null;
                })}
            </ul>
        </div>
    );
};

export default Article;

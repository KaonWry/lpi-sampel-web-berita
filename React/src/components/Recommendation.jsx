import React from 'react';

const Recommendation = ({ recommendations }) => {
    return (
        <div className="recommendation">
            <h2>Berita Terpopuler</h2>
            <ul id="recommendation-list">
                {recommendations.map((item, index) => (
                    <li key={index}>
                        <img src={item.thumbnail} alt={item.title} style={{ width: '100%', height: 'auto', marginBottom: '5px' }} />
                        <a href="#">{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Recommendation;

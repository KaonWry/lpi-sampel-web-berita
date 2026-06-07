import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Article from './components/Article';
import Recommendation from './components/Recommendation';

const App = () => {
    const [article, setArticle] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const articleUrl = 'http://localhost:6969/article';
    const recommendationUrl = 'http://localhost:6969/recommendation';

    useEffect(() => {
        // Fetch Article
        fetch(articleUrl)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                setArticle(data);
            })
            .catch(error => {
                console.error('Error fetching article:', error);
            });

        // Fetch Recommendations
        fetch(recommendationUrl)
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => {
                setRecommendations(data);
            })
            .catch(error => {
                console.error('Error fetching recommendations:', error);
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="content">
                <Article article={article} />
                <Recommendation recommendations={recommendations} />
            </div>
        </div>
    );
};

export default App;

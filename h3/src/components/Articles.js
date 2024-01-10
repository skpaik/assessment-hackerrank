import React, {useEffect, useState} from 'react';

function Articles({articles}) {
    const [currentArticleList, setCurrentArticleList] = useState(articles);

    function sortByUpVote() {
        const articles2 = articles.sort(function (a, b) {
            return b.upvotes - a.upvotes;
        });
        setCurrentArticleList(articles2);
    }

    function sortByDate() {
        articles.sort(function(a, b) {
            var keyA = new Date(a.date),
                keyB = new Date(b.date);
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        });

        setCurrentArticleList(articles);
    }

    useEffect(() => {
        sortByUpVote();
    }, [articles]);

    function handleMostUpvotedClick(e) {
        e.preventDefault();
        sortByUpVote();
    }

    function handleMostRecentClick(e) {
        e.preventDefault();
        sortByDate();
    }

    return (
        <div className="card w-50 mx-auto">
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button onClick={handleMostUpvotedClick} data-testid="most-upvoted-link" className="small">Most
                    Upvoted
                </button>
                <button onClick={handleMostRecentClick} data-testid="most-recent-link" className="small">Most Recent
                </button>
            </div>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Upvotes</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {currentArticleList.map((article, index) => {
                    return (
                        <tr data-testid="article" key={index}>
                            <td data-testid="article-title">{article.title}</td>
                            <td data-testid="article-upvotes">{article.upvotes}</td>
                            <td data-testid="article-date">{article.date}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );

}

export default Articles;

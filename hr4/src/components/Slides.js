import React, {useEffect, useState} from 'react';

function Slides({slides}) {
    const [enableRestart, setEnableRestart] = useState(false);
    const [enablePrev, setEnablePrev] = useState(false);
    const [enableNext, setEnableNext] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleButtonState() {
        if (currentIndex === 0) {
            setEnableRestart(true);
            setEnablePrev(true);
            setEnableNext(false);
        } else if (currentIndex === slides.length - 1) {
            setEnableNext(true);

            setEnableRestart(false);
            setEnablePrev(false);
        } else {
            setEnableNext(false);
            setEnableRestart(false);
            setEnablePrev(false);
        }
    }

    useEffect(() => {
        handleButtonState();
    }, [currentIndex]);

    function handleRestartClick(e) {
        e.preventDefault();
        setCurrentIndex(0);
    }

    function handlePrevClick(e) {
        e.preventDefault();
        setCurrentIndex(currentIndex - 1);
    }

    function handleNextClick(e) {
        e.preventDefault();
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button disabled={enableRestart} onClick={handleRestartClick}
                        data-testid="button-restart" className="small outlined">Restart
                </button>
                <button disabled={enablePrev} onClick={handlePrevClick}
                        data-testid="button-prev" className="small">Prev
                </button>
                <button disabled={enableNext} onClick={handleNextClick}
                        data-testid="button-next" className="small">Next
                </button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{slides[currentIndex].title}</h1>
                <p data-testid="text">{slides[currentIndex].text}</p>
            </div>
        </div>
    );

}

export default Slides;

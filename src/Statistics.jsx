import { useState } from 'react';
import { Notification } from "./Notification.jsx";

export const Statistics = () => {
    const [good, addGood] = useState(0)
    const [neutral, addNeutral] = useState(0)
    const [bad, addBad] = useState(0)

    const goodFunction = () => {
        addGood(good + 1)
    }

    const neutralFunction = () => {
        addNeutral(neutral + 1)
    }

    const badFunction = () => {
        addBad(bad + 1)
    }

    const total = good + neutral + bad;
    const positivePercentage = total === 0 ? 0 : Math.round((good / total) * 100);

    return (
        <div className="reviews">
            <h2>Please leave feedback</h2>
            <button onClick={goodFunction}>Good </button>
            <button onClick={neutralFunction}>Neutral</button>
            <button onClick={badFunction}>Bad</button>

            <h2>Statistics</h2>
            {total === 0 ? (
                <Notification message=" There is no feedback " />
            ) : (
                <>
                    <p>Good: <span>{good}</span></p>
                    <p>Neutral: <span>{neutral}</span></p>
                    <p>Bad: <span>{bad}</span></p>
                    <p>Total: <span>{total}</span></p>
                    <p>Positive feedback: <span>{positivePercentage}%</span></p>
                </>
            )}
        </div>
    )
}
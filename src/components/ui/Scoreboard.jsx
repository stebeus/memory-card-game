export function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <p>
        Score: <span className="score">{score}</span>
      </p>
      <p>
        Best: <span className="score">{bestScore}</span>
      </p>
    </div>
  );
}

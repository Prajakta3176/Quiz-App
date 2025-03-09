import React from "react";
import { PieChart, Pie, Cell } from "recharts";

export default function ResultPage({ score, totalQuestions }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  // Chart data
  const data = [
    { name: "Correct", value: percentage },
    { name: "Incorrect", value: 100 - percentage },
  ];

  // Colors for the chart
  const COLORS = ["#4CAF50", "#FF6347"]; // Green for correct, red for incorrect

  return (
   <div className="resultPage">
     <div className="result-container">
      <h2>Quiz Completed!</h2>
      <div className="chart-container">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={({ cx, cy }) => (
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="20px"
                fontWeight="bold"
                fill="#333"
              >
                {percentage}%
              </text>
            )}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </div>
      <p>You scored {score} out of {totalQuestions}!</p>
      {/* <button className="retry-button" onClick={restartQuiz}>Retry Quiz</button> */}
    </div>
   </div>
  );
}

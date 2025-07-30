import React from "react";
import "./calendar.scss";

const Calendar = () => {
  // 2025년 8월: 1일(금) 시작
  const weeks = [
    ["", "", "", "", "", "1", "2"],
    ["3", "4", "5", "6", "7", "8", "9"],
    ["10", "11", "12", "13", "14", "15", "16"],
    ["17", "18", "19", "20", "21", "22", "23"],
    ["24", "25", "26", "27", "28", "29", "30"],
    ["31", "", "", "", "", "", ""],
  ];

  return (
    <div className="calendar-wrapper">
      <div className="calendar-content" data-aos="fade-up">
        <div className="month-label">8월</div>
        <table className="calendar-table">
          <tbody>
            {weeks.map((week, i) => (
              <tr key={i}>
                {week.map((day, idx) => (
                  <td key={idx}>
                    {day === "15" ? (
                      <span className="highlight-circle">{day}</span>
                    ) : (
                      day
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;

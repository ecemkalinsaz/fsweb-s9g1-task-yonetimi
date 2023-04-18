import React from "react";

const Task = ({ taskObj, onComplete }) => {
  const handleCompleteClick = () => {
    onComplete(taskObj.id);
  };

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {taskObj.status === "yapılacak" && (
        <button onClick={handleCompleteClick}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
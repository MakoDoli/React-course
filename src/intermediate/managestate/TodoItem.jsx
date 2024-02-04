import React from "react";

// eslint-disable-next-line react/prop-types
function TodoItem({ item }) {
  console.log(item);
  return (
    <div>
      <p>{item}</p>
    </div>
  );
}
const memoizedTodoItem = React.memo(TodoItem);
export default memoizedTodoItem;

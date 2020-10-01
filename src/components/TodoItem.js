import React from 'react';
import PropTypes from 'prop-types';

export function TodoItem({
  uneditedTitle,
  setUneditedTitle,
  todoList,
  setTodoList,
  todo,
  index,
}) {
  const list = [...todoList];

  const handleDoubleClick = (event) => {
    const clickedTodo = event.target;
    setUneditedTitle(todo.title);
    clickedTodo.closest('li').className = 'editing';
    clickedTodo.closest('li').lastChild.focus();
  };

  const handleToggle = () => {
    const switchedTodo = todo;

    switchedTodo.completed = !todo.completed;
    setTodoList([...list]);
  };

  const handleDestroy = () => {
    list.splice(index, 1);
    setTodoList([...list]);
  };

  const handleEdit = (event) => {
    list[index].title = event.target.value;
    setTodoList([...list]);
  };

  const handleKeyDown = (event) => {
    const clickedTodo = event.target;

    if (event.key === 'Enter') {
      if (!event.target.value.trim()) {
        list.splice(index, 1);
        setTodoList([...list]);
      } else {
        list[index].title = event.target.value.trim();
        setTodoList([...list]);
        clickedTodo.closest('li').className
          = todo.completed ? 'completed' : '';
      }
    }

    if (event.key === 'Escape') {
      list[index].title = uneditedTitle;
      setTodoList([...list]);
      clickedTodo.closest('li').className
        = todo.completed ? 'completed' : '';
    }
  };

  const handleBlur = ({ target }) => {
    if (!target.value.trim()) {
      list.splice(index, 1);
      setTodoList([...list]);
    } else {
      list[index].title = target.value.trim();
      setTodoList([...list]);
      target.closest('li').className
        = todo.completed ? 'completed' : '';
    }
  };

  return (
    <li
      className={todo.completed ? 'completed' : undefined}
      onDoubleClick={handleDoubleClick}
    >
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={todo.completed}
          onChange={handleToggle}
        />
        <label>{todo.title}</label>
        <button
          type="button"
          className="destroy"
          onClick={handleDestroy}
        />
      </div>
      <input
        type="text"
        className="edit"
        value={todo.title}
        onChange={handleEdit}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todoList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  setUneditedTitle: PropTypes.func.isRequired,
  setTodoList: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  uneditedTitle: PropTypes.string.isRequired,
};

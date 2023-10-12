
import pencilIcon from "../assets/pencil (1).png";
import Edit from "./Edit";

interface props {
  filteredTodos: { text: string; date: string }[];
  onEditClick: any;
  setEditClick: any;
  handleRemove: any;
  handleEditTodo: any;
}

const TodoElement = ({
  filteredTodos,
  onEditClick,
  setEditClick,
  handleRemove,
  handleEditTodo,
}: props) => {
  return (
    <div className="Todos-Container  w-3/4 flex flex-col justify-center container items-center ">
      {filteredTodos.map((todo, index) => {
        return (
          <>
            <div
              key={index}
              className="Todo-container flex  items-center h-20 border-l border-r border-t border-b  w-full mt-2 rounded-md shadow-xl backdrop-blur-sm bg-[#6d94cf]"
            >
              <div className="w-3/5  ml-2 container">
                <p className="break-all  ml-2 ">{todo.text}</p>
              </div>
              <div className="w-2/5 container">
                <p className="flex justify-end">
                  {todo.date ? `Til: ${todo.date}` : ""}
                </p>
              </div>
              <div className="w-1/5 flex container justify-end pr-2">
                <button
                  onClick={() =>
                    onEditClick == index
                      ? setEditClick(-1)
                      : setEditClick(index)
                  }
                  className="Edit-Button ml-2 min-w-[2.5rem] mr-2 bg-[#f0e4c5] h-10 w-10 rounded-md"
                >
                  <img
                    className="h-3/5 relative left-2"
                    src={pencilIcon}
                    alt="Edit"
                  />
                </button>
                <button
                  className="bg-red-300 h-10 w-10 rounded-md min-w-[2.5rem] hover:rotate-180"
                  onClick={() => {
                    handleRemove(index);
                    if (onEditClick == index) {
                      setEditClick(-1);
                    }
                  }}
                >
                  &#x2716;
                </button>
              </div>
            </div>
            {onEditClick == index && (
              <Edit
                onEdit={(newText, newDate) =>
                  handleEditTodo(index, newText, newDate)
                }
              ></Edit>
            )}
          </>
        );
      })}
    </div>
  );
};

export default TodoElement;

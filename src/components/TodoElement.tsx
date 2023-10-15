
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
    <div className="Todos-Container  w-3/4 flex flex-col justify-center items-center sm:w-11/12 ">
      {filteredTodos.map((todo, index) => {
        return (
          <>
            <div
              key={index}
              className="Todo-container flex  items-center h-20 border-l border-r border-t border-b  w-full mt-2 rounded-md shadow-xl backdrop-blur-sm bg-[#6d94cf] sm:mt-1"
            >
              <div className="w-6/12  ml-2 ">
                <p className="break-all  ml-2  sm:text-sm">{todo.text}</p>
              </div>
              <div className="w-3/12  sm:w-4/12">
                <p className="flex justify-end sm:text-sm">
                  {todo.date ? `Til: ${todo.date}` : ""}
                </p>
              </div>
              <div className="w-3/12 flex  justify-end pr-2 h-16 items-center sm:items-end sm:flex-col sm:justify-center sm:space-y-1   sm:h-20 sm:w-2/12  ">
                <button
                  onClick={() =>
                    onEditClick == index
                      ? setEditClick(-1)
                      : setEditClick(index)
                  }
                  className="Edit-Button ml-2 min-w-[2.5rem] mr-2 sm:min-w-0 bg-[#f0e4c5] h-10 w-4 rounded-md sm:mr-0 sm:w-8 sm:h-8 "
                >
                  <img
                    className="h-3/5 relative left-2"
                    src={pencilIcon}
                    alt="Edit"
                  />
                </button>
                <button
                  className="bg-red-300 h-10 w-10 rounded-md min-w-[2.5rem] sm:min-w-0 hover:rotate-180 sm:ml-2 sm:w-8 sm:h-8"
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

import { useEffect, useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Input from "./components/Input";
import TodoElement from "./components/TodoElement";

function App() {
  // Definiere den initialen Zustand deiner Komponente
  const [inputValue, setInputValue] = useState(""); // Der eingegebene Text für ein neues To-Do
  const [todos, setTodos] = useState<{ text: string; date: string }[]>([]); // Die Liste der To-Do-Elemente
  const [inputType, setInputType] = useState(""); // Der Typ des Eingabefelds (Text oder Datum)

  const [showDate, setShowDate] = useState(""); // Das ausgewählte Datum
  const [onEditClick, setEditClick] = useState(-1); // Der Index des bearbeiteten To-Do-Elements

  //filter
  const [filterText, setFilterText] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [searchType, setSearchType] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const textMatch = todo.text
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const dateMatch = todo.date.includes(filterDate);

    return textMatch && dateMatch; // You can adjust this logic as needed
  });

  // Funktion zum Handhaben der Eingabe des To-Do-Texts
  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  // Funktion zum Hinzufügen eines neuen To-Do-Elements
  const handleAdd = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, { text: inputValue, date: showDate }]);
      setInputValue(""); // Setze das Eingabefeld zurück
      setShowDate(""); // Setze das ausgewählte Datum zurück
    }
  };

  // Funktion zum Handhaben der Eingabe des Datums
  const handleDateInput = (e: any) => {
    setShowDate(e.target.value);
  };

  // Funktion zum Entfernen eines To-Do-Elements anhand seines Index
  const handleRemove = (index: number) => {
    // Filtere die To-Do-Liste und erstelle eine neue Liste ohne das ausgewählte Element
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);

    // Aktualisiere den Local Storage, um das entfernte Element zu spiegeln
    const todosToStore = newTodos.map((todo, index) => ({
      id: index, // Verwende den Index als eindeutige ID
      text: todo.text,
      date: todo.date,
    }));
    localStorage.setItem("todos", JSON.stringify(todosToStore));
  };

  // Funktion zum Bearbeiten eines To-Do-Elements
  const handleEditTodo = (index: number, newText: string, newDate: string) => {

    let updatedTodos = [...todos];
    if( newText == "" && newDate == ""){
      setEditClick(-1)
    } else if (newText == "") {
      updatedTodos[index] = { text: todos[index].text, date: newDate };
      setTodos(updatedTodos);
      setEditClick(-1); // Schließe den Bearbeitungscontainer
    } else if (newDate == "") {
      updatedTodos[index] = { text: newText, date: todos[index].date };
      setTodos(updatedTodos);
      setEditClick(-1); 
    } else {
      updatedTodos[index] = { text: newText, date: newDate };
      setTodos(updatedTodos);
      setEditClick(-1); 
    }

    // Aktualisiere den Local Storage, um das bearbeitete Element zu spiegeln
    const todosToStore = updatedTodos.map((todo, index) => ({
      id: index, 
      text: todo.text,
      date: todo.date,
    }));
    localStorage.setItem("todos", JSON.stringify(todosToStore));
  };

  // storage
  // Verwende useEffect, um To-Do-Elemente mit eindeutigen IDs in den Local Storage zu speichern
  useEffect(() => {
    const todosWithIds = todos.map((todo, index) => ({
      id: index, 
      text: todo.text,
      date: todo.date,
    }));

    if (todosWithIds[0] != null) {
      window.localStorage.setItem("todos", JSON.stringify(todosWithIds));
    }
  }, [todos]);

  // Verwende useEffect, um To-Do-Elemente aus dem Local Storage zu laden, wenn die Komponente montiert ist
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      const todosFromStorage = JSON.parse(storedTodos);
      setTodos(todosFromStorage);
    } else {
      // Wenn der Local Storage leer oder null ist, initialisiere todos als ein leeres Array
      setTodos([]);
    }
  }, []);

  return (
    <>
      <div className="font-semibold App-container bg-[#a2a8d3] min-h-screen w-full flex flex-col items-center">
        <Navbar />
        <Input
          handleInput={handleInput}
          inputValue={inputValue}
          showDate={showDate}
          handleDateInput={handleDateInput}
          handleAdd={handleAdd}
        />

        {todos.length >= 1 && (
          <Filter
            filterDate={filterDate}
            searchType={searchType}
            filterText={filterText}
            setFilterText={setFilterText}
            setFilterDate={setFilterDate}
            setSearchType={setSearchType}
          />
        )}

        <TodoElement
          filteredTodos={filteredTodos}
          onEditClick={onEditClick}
          setEditClick={setEditClick}
          handleRemove={handleRemove}
          handleEditTodo={handleEditTodo}  />
      </div>
    </>
  );
}

export default App;

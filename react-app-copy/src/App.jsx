import { List } from "./components/Todolist";

export const App = () => {
  const lists = [
    { title: "My First List", body: "Wake Up Early" },
    { title: "My Second List", body: "Have my Breakfast" },
    { title: "My Third List", body: "Attend my lectures in ITI" },
    { title: "My Fourth List", body: "Doing My Labs and Tasks" },
    { title: "My Fifth List", body: "Take a Break and having my Lunch" },
    { title: "My Sixth List", body: "Develop myself in Web Development" },
  ];
  return (
    <div>
      <h2>Welcome to my own ToDoList</h2>
      {lists.map((list) => (
        <List title={list.title} body={list.body} />
      ))}

    </div>
  );
};

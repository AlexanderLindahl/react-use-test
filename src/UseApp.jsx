import { useState, use } from "react";
import "./App.css";

const fetchIds = () => fetch("/ids.json").then((res) => res.json());
const fetchUser = (id) => fetch(`/users/${id}.json`).then((res) => res.json());

const UserDetails = ({ id }) => {
  const user = use(fetchUser(id));

  return <div>{JSON.stringify(user)}</div>;
};

const App = () => {
  const [selected, setSelected] = useState();
  const ids = use(fetchIds());

  return (
    <div className="App">
      {ids.map((id) => (
        <button key={id} onClick={() => setSelected(id)}>
          Ladda {id}
        </button>
      ))}

      {selected && <UserDetails id={selected} />}
    </div>
  );
};

export default App;

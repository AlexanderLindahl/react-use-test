import { useState, useEffect } from "react";
import "./App.css";

const fetchIds = () => fetch("ids.json").then((res) => res.json());
const fetchUser = (id) => fetch(`/users/${id}.json`).then((res) => res.json());

const UserDetails = ({ id }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const user = await fetchUser(id);
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, [id]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{JSON.stringify(user)}</div>;
};

const App = () => {
  const [ids, setIds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState();

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await fetchIds();

        setIds(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchdata();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      {ids.map((id) => (
        <button
          key={id}
          onClick={() => setSelected(id)}
        >{`Ladda ${id}`}</button>
      ))}

      {selected && <UserDetails id={selected} />}
    </div>
  );
};

export default App;

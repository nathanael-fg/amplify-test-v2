import { useEffect } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();
// const {data } = await client.queries.getAccount({
//   id: "217174"
// });

function App() {
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  // console.log(data)

  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  useEffect(() => {

  }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Input Account Id") });
  // }


  return (
    <main>
      <h1>Account Info:</h1>
      <button>Placeholder</button>
      {/* <ul>
          <li 
          key={data?.id}>{data?.name}
          </li>
      </ul> */}
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;

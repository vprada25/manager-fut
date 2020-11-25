
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/players"


const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>
          Colombia Fc
    </h1>
        <Jugadores />
      </main>
    </Provider>
  );


}

export default App;

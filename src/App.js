
import { Provider } from "react-redux";
import store from "./store";
import Jugadores from "./components/players"
import Team from "./components/team";


const App = () => {
  return (
    <Provider store={store}>
      <main>
        <h1>
          Colombia Fc
    </h1>
        <Jugadores />
        <Team/>
      </main>
    </Provider>
  );


}

export default App;

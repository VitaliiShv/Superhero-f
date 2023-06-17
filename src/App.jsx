import UserRoutes from "./components/UserRoutes";
import Navbar from "./components/Navbar/Navbar";
import store from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <UserRoutes />
    </Provider>
  );
};

export default App;

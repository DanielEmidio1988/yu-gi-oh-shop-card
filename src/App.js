import Router from "./routes/Router"
import { GlobalStyled } from "./GlobalStyled";
import { GlobalContext } from "./context/GlobalContext";
import GlobalState from "./context/GlobalState";

function App() {

  const context = GlobalState()
  
  return (
    <>
        <GlobalStyled/>
        <GlobalContext.Provider value={context}>
         <Router/>
        </GlobalContext.Provider>
    </>
  );
}

export default App;

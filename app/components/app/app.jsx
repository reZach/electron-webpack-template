import { React } from "react";
import { render } from "react-dom";
import { Home } from "../home/home";

class App extends React.Component {

    render() {
        return <div>
            <Home></Home>
        </div>;
    }
}

render(
    <App></App>,
    document.getElementById("root")
);

export default App;
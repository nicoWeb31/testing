import { render, screen } from "@testing-library/react";
import App from "../../components/App";
import ReactDOM from "react-dom";

test("shows a comment box", () => {
    // render(<App />);
    // const linkElement = screen.getByText(/the/i);

    
    // expect(linkElement).toBeInTheDocument()




    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    //look inside the div
    //and check to see if the component box is in there

    console.log(div.innerHTML);
    expect(div.innerHTML).toContain('Comment Box')

    ReactDOM.unmountComponentAtNode(div);

});

// import { render, screen } from "@testing-library/react";
import { shallow } from "enzyme";
import App from "../../components/App";
import CommentBox from "../../components/CommentBox";
// import ReactDOM from "react-dom";
// import '@testing-library/jest-dom/extend-expect';

test("shows a comment box", () => {
    // render(<App />);
    // // const linkElement = screen.getByText(/the/i);
    // const comment = screen.getByText('Comment Box')

    // expect(comment).toBeInTheDocument()

    // const div = document.createElement("div");
    // ReactDOM.render(<App />, div);
    // //look inside the div
    // //and check to see if the component box is in there

    // console.log(div.innerHTML);
    // expect(div.innerHTML).toContain('Comment Box')

    // ReactDOM.unmountComponentAtNode(div);

    //_________________lib enzyme___________
    const component = shallow(<App />);

    expect(component.find(CommentBox).length).toEqual(1);
});

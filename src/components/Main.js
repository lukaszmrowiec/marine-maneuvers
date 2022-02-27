import React, { Component } from "react";
import "../styles/Main.css";
import Instruction from "../components/Instruction";

class Main extends Component {
    state = {
        instruction: false,
    };

    handleImstructionView() {
        this.setState({
            instruction: true,
        });
    }

    handleMainManuView() {
        this.setState({
            instruction: false,
        });
    }

    render() {
        return (
            <div id="board" className="centerBack">
                <div id="header" className="centerBack"></div>
                <div id="menu" className="centerBack">
                    {/* <input type="button" id="graj" className="buttons"></input>
                    <a href="/src/images/general/">
                        <input
                            type="button"
                            id="instrukcja"
                            className="buttons"
                        >
                            {" "}
                        </input>
                    </a> */}
                    <button
                        id="graj"
                        className="buttons"
                        onClick={this.handleMainManuView}
                    ></button>
                    <button
                        id="instrukcja"
                        className="buttons"
                        onClick={this.handleImstructionView}
                    ></button>
                </div>
                <form id="test">
                    <h4>
                        ABY PRZETESTOWAĆ OTWÓRZ GRĘ W DWÓCH OKNACH PRZEGLĄDARKI
                    </h4>
                </form>
            </div>
        );
    }
}

export default Main;

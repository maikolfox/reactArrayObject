import React from "react";

/*My aims is to create a complex data
structure wich is a state array containing object
the outcome will looks like this :
data [{"param1":"value1","param2":"value2",},
{"param1":"value3","param2":"value3"},...]
 
]*/
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataStruc: [],
      param1: "",
      param2: ""
    };
  }

  handleInput = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleAddItem = event => {
    event.preventDefault();

    const newItem = {
      param1: this.state.param1,
      param2: this.state.param2
    };
    console.log(this.state.dataStruc);

    this.setState(prevState => ({
      dataStruc: prevState.dataStruc.concat(newItem)
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h3>Test array state and nested param</h3>
        <form>
          <label htmlFor="param1">Param1 : </label>
          <input
            name="param1"
            onChange={e => {
              this.setState({ param1: e.target.value });
            }}
          />
          &nbsp; &nbsp;
          <label htmlFor="param2">Param2 : </label>
          <input
            name="param2"
            onChange={e => {
              this.setState({ param2: e.target.value });
            }}
          />
          &nbsp; &nbsp;
          <button type="button" onClick={this.handleAddItem}>
            {" "}
            Valider
          </button>
        </form>
        <div style={{ backgroundColor: "green" }}>txt</div>
      </React.Fragment>
    );
  }
}
export default App;

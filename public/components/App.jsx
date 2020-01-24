import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://127.0.0.1:313/api/about/555')
      .then(data => data.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>HELLO ANOTHER WORLD!</div>
    );
  }
}

export default App;
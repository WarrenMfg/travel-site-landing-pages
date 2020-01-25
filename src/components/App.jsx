import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    let url = window.location.pathname.split('/');
    let id = url[1];

    fetch(`http://127.0.0.1:313/api/about/${id}`)
      .then(data => data.json())
      .then(data => {

      })
      .catch(err => console.log('error at App.jsx componentDidMount', err));
  }

  render() {
    return (
      <h2>About</h2>

    );
  }
}

export default App;
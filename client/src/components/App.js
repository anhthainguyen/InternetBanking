import React from 'react';
import { loadReCaptcha } from 'react-recaptcha-google'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
      </div>
    )
  }
  componentDidMount() {
    loadReCaptcha();
  }
}

export default App;

import {Component} from 'react'

import Message from '../Message'
import Logout from '../Logout'
import Login from '../Login'

import './index.css'

class Home extends Component {
  state = {isLoged: false}

  changeMode = () => {
    this.setState(prevState => ({isLoged: !prevState.isLoged}))
  }

  render() {
    const {isLoged} = this.state
    return (
      <div className="bg-container">
        <div className="login-container">
          <Message isLoged={isLoged} />
          {isLoged ? (
            <Logout logout={this.changeMode} />
          ) : (
            <Login login={this.changeMode} />
          )}
        </div>
      </div>
    )
  }
}
export default Home

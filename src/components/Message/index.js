// Write your code here

const Message = props => {
  const {isLoged} = props
  const message = isLoged ? 'Welcome User' : 'Please Login'

  return <h1>{message}</h1>
}

export default Message

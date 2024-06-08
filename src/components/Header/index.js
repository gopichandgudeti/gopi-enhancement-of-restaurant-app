import './index.css'

const Header = props => {
  const {cartItems, name} = props

  return (
    <nav className="header-bg-container">
      <h1>{name}</h1>
      <p>My Orders {cartItems.length}</p>
    </nav>
  )
}

export default Header

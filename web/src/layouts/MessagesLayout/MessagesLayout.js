import { Link, routes } from '@redwoodjs/router'

const MessagesLayout = (props) => {
  return (
    <div className="rw-scaffold">
      <header className="rw-header">
        <h1 className="rw-heading rw-heading-primary">
          <Link to={routes.messages()} className="rw-link">
            Messages
          </Link>
        </h1>
        <Link to={routes.newMessage()} className="rw-button rw-button-green">
          <div className="rw-button-icon">+</div> New Message
        </Link>
      </header>
      <main className="rw-main">{props.children}</main>
    </div>
  )
}

export default MessagesLayout

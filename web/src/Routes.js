// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route
        path="/log-in/session"
        page={LogInSessionPage}
        name="logIn/session"
      />
      <Route path="/verify" page={VerifyPage} name="verify" />
      <Route path="/sign-up" page={SignUpPage} name="signUp" />
      <Route path="/log-out" page={LogOutPage} name="logOut" />
      <Route
        path="/password-reset"
        page={PasswordResetPage}
        name="passwordReset"
      />
      <Route path="/log-in" page={LogInPage} name="logIn" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/messages/new" page={NewMessagePage} name="newMessage" />
      {/* <Route
        path="/messages/{id}/edit"
        page={EditMessagePage}
        name="editMessage"
      /> */}
      <Route path="/messages/{id}" page={MessagePage} name="message" />
      <Route path="/messages" page={MessagesPage} name="messages" />
      {/* <Route path="/users/new" page={NewUserPage} name="newUser" /> */}
      <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
      {/* <Route path="/users/{id}" page={UserPage} name="user" /> */}
      <Route path="/users" page={UsersPage} name="users" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

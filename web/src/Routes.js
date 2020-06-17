// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/verify" page={VerifyPage} name="verify" />

      <Private unauthenticated="logIn">
        <Route path="/dashboard" page={DashboardPage} name="dashboard" />
        <Route path="/log-out" page={LogOutPage} name="logOut" />
      </Private>

      <Route path="/sign-up" page={SignUpPage} name="signUp" />
      <Route path="/log-in" page={LogInPage} name="logIn" />
      <Route
        path="/password-reset"
        page={PasswordResetPage}
        name="passwordReset"
      />

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes

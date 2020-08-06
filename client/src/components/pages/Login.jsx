import React from 'react'

function Login() {
  return (
    <div className="container mt-5">
      <h1>Login</h1>

      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <form action="/register" method="POST">
                <div className="form-group">
                  <lable for="email">Email</lable>
                  <input type="email" className="form-control" name="username" />
                </div>

                <div className="form-group">
                  <lable for="password">Password</lable>
                  <input type="password" className="form-control" name="passoword" />
                </div>

                <button type="submit" className="btn btn-dark">Login</button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-sm-4">
          <div className="card social-block">
            <div className="card-body">
              <a className="btn-block btn-social btn-google btn" href="/auth/google" role="button">
              <i className="fab fa-google"></i>
                Sign In with Google
              </a>
            </div>
          </div>

          <div className="card social-block">
            <div className="card-body">
              <a className="btn-block btn-social btn-facebook btn" href="/auth/facebook" role="button">
              <i className="fab fa-facebook-f"></i>
                Sign In with Facebook
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login
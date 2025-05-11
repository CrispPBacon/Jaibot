export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="form-login">
        <div className="form-item">
          <input
            type="text"
            placeholder="Username"
            autoComplete="off"
            autoCorrect="off"
            autoSave="off"
          />
        </div>
        <div className="form-item">
          <input
            type="password"
            placeholder="Password"
            autoComplete="off"
            autoCorrect="off"
            autoSave="off"
          />
        </div>
      </form>
    </div>
  );
}

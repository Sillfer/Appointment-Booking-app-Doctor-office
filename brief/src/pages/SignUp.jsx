function SignUp() {
  return (
    <div className="signUp">
      <h1 className="text-3xl font-bold underline">Sign Up</h1>
      <form>
        <label>
          First Name:
          <input type="text" name="firstName" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateBirth" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUp;
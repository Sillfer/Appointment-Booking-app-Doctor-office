import { useNavigate } from "react-router-dom";
import SignUpForm from "../../components/layout/auth/SignUpForm";

function SignUp() {
  const navigate = useNavigate();
  function addSignupHandler(SignupData) {
    fetch("http://localhost/api/user/signUp", {
      method: "POST",
      body: JSON.stringify(SignupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/Home");
    });
  }
  return (
    <section>
      <SignUpForm onAddClient={addSignupHandler} />
    </section>
  );
}
export default SignUp;

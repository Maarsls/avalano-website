import { FcGoogle } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import {
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Sign in with google
  const googleProvider = new GoogleAuthProvider();
  const GoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      //   console.log(result.user);
      route.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home")
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  };
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div className="pt-24 p-10 text-gray-700 bg-secondary-background-color pb-96">
      <h2 className="text-3xl font-medium">Join today</h2>
      <div className="py-4">
        <h3 className="py-4">Sign in with one of the providers</h3>
        <div className="flex flex-col gap-4">
          <button
            onClick={GoogleLogin}
            className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 btn"
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <label
            className="text-white bg-gray-700 p-4 w-full font-medium rounded-lg flex align-middle gap-2 btn"
            htmlFor="my-modal"
          >
            <FiLogIn className="text-2xl text-stone-400" />
            Sign in with Email / Password
          </label>
        </div>
        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <div>
              <p> Login to Avalano </p>
              <form>
                <div>
                  <label htmlFor="email-address">
                    Email address
                  </label>
                  <input id="email-address" name="email" type="email" required placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">
                    Password
                  </label>
                  <input id="password" name="password" type="password" required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                  <input onClick={onLogin} type="submit" name="Login" className="btn"/>
              </form>

              <p className="text-sm text-black text-center">
                <Link href={"/register"}>
                  No account yet?
                </Link>
              </p>

            </div>
          </div>
        </div>
      </div >
    </div >
  );
}

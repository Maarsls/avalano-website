import { FcGoogle } from "react-icons/fc";
import { FiLogIn, FiGithub } from "react-icons/fi";
import {
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Login() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const GithubProvider = new GithubAuthProvider();
  const GithubLogin = async () => {
    try {
      const result = await signInWithPopup(auth, GithubProvider);
      console.log(result.user);
      route.push("/dashboard");
    } catch (error) {
      console.log(error.message);
    }
  };

  const onLogin = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        if (userCredential.user.emailVerified) {
          console.log("USSSSSSSSSR IS");
          const user = userCredential.user;
          console.log(user);

          route.push("/dashboard");
        } else {
          // remove user from auth state
          auth.currentUser = null;
          console.log("NOT VERIFIED");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
    <div className="pt-24 p-10 text-gray-700 bg-primary-background-color h-screen">
      <div className="my-auto">
        <h1 className="text-4xl font-medium text-center font-latoBold">
          Jetzt anmelden
        </h1>
        <div className="py-4">
          <h3 className="py-4 text-center">
            Melde dich an, um zum Dashboard zu gelangen
          </h3>
          <div className="flex flex-col gap-4  mx-auto md:w-2/3 lg:w-1/2">
            <button
              onClick={GoogleLogin}
              className="text-white bg-gray-700   btn"
            >
              <FcGoogle className="text-2xl mr-3" />
              Anmelden mit Google
            </button>
            <button
              onClick={GithubLogin}
              className="text-white bg-gray-700   btn"
            >
              <FiGithub className="text-2xl mr-3" />
              Anmelden mit Github
            </button>
            {/* tailwind css divider */}
            <div className="flex items-center my-4">
              <div className="border-t border-gray-300 flex-grow mr-3"></div>
              <div className="text-gray-500">oder</div>
              <div className="border-t border-gray-300 flex-grow ml-3"></div>
            </div>
            <label className="text-white bg-gray-700 btn" htmlFor="my-modal">
              <FiLogIn className="text-2xl text-stone-400 mr-3" />
              Anmelden mit Email und Passwort
            </label>
          </div>
        </div>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <label htmlFor="my-modal" className="modal cursor-pointer">
          <label className="modal-box relative" htmlFor="">
            <div>
              <p> Login to Avalano </p>
              <form>
                <div>
                  <label htmlFor="email-address">Email address</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <input
                  onClick={onLogin}
                  type="submit"
                  name="Login"
                  className="btn"
                />
              </form>

              <p className="text-sm text-black text-center">
                <Link href={"/register"}>No account yet?</Link>
              </p>
            </div>
          </label>
        </label>
      </div>
    </div>
  );
}

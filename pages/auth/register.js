import React, { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function register() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [areSame, setAreSame] = useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        
        const user = userCredential.user;
          console.log(user);
          route.push("/dashboard");
        // Signed in
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const checkPassword = () => {
    console.log("check");
    console.log(password, password2);
    if (password === password2) {
      setAreSame(true);
    } else {
      setAreSame(false);
    }
  };
  useEffect(() => {
    if (user) {
      route.push("/dashboard");
    } else {
      console.log("login");
    }
  }, [user]);

  return (
    <div>
      {/* tailwind css register component */}
      <div className="flex items-center justify-center h-screen bg-primary-background-color">
        <div className="w-full max-w-md">
          <form className="bg-primary-card-color shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-200 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password"
              >
                Passwort
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              {/* <p className="text-red-500 text-xs italic">
                Please choose a password.
              </p> */}
            </div>
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="password2"
              >
                Passwort wiederholen
              </label>
              <input
                className="shadow appearance-none border  rounded w-full py-2 px-3 text-grey-200 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password2"
                type="password"
                placeholder="******************"
                onChange={(e) => {
                  setPassword2(e.target.value);
                  console.log(password, password2);
                  checkPassword();
                }}
              />
              {!areSame && (
                <p className="text-red-500 text-xs italic">
                  Please choose a password.
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                className="btn  text-white font-bold py-2 px-4 "
                type="button"
                onClick={onRegister}
              >
                Registrieren
              </button>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2020 Acme Corp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

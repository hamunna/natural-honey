import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { useState, useEffect } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();
const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const googleProvider = new GoogleAuthProvider();
	const auth = getAuth();

	// Email-Password Register Process
	const registerUser = (email, password, name, history) => {
		setIsLoading(true);

		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setError('');
				const newUser = { email, displayName: name };
				setUser(newUser);

				// Save User to the Database
				saveUser(email, name, 'POST');

				// Send Name to Firebase after Creation
				updateProfile(auth.currentUser, {
					displayName: name
				}).then(() => {

				})
					.catch((error) => {

					});

				history.replace("/");
			})
			.catch((error) => {
				const errorCode = error.code;
				if (errorCode === 'auth/email-already-in-use') {
					setError("User already exist!");
				}
			})
			.finally(() => setIsLoading(false));
	}

	// Email-Password LogIn Process
	const loginUser = (email, password, location, history) => {
		setIsLoading(true);

		signInWithEmailAndPassword(auth, email, password)
			.then((user) => {
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setError('');
			})
			.catch((error) => {
				// const errorCode = error.code;
				setError(error.message);
			})
			.finally(() => setIsLoading(false));

	}


	// Observe User State Process
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {

				setUser(user);

			} else {
				setUser({});
			}
			setIsLoading(false);

		});
		return () => unsubscribe;
	}, [])



	// Google SignIn Process
	const signInWithGoogle = (location, history) => {
		setIsLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;

				saveUser(user.email, user.displayName, 'PUT');
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setError('');

			}).catch((error) => {
				// const errorCode = error.code;
				// const errorMessage = error.message;

			})
			.finally(() => setIsLoading(false));
	}

	// SignOut Process
	const logOut = () => {
		signOut(auth).then(() => {
			alert('Are you sure to LogOut?')
			// Sign-out successful.
		}).catch((error) => {
			// An error happened.
		});
	}

	// Save User Data
	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('http://localhost:5000/users', {
			method: method,
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then()
	}

	return {
		user,
		isLoading,
		setIsLoading,
		registerUser,
		loginUser,
		signInWithGoogle,
		logOut
	}
}

export default useFirebase;
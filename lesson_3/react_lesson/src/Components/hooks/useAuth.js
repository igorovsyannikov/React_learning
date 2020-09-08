import {useEffect, useState} from 'react';

export function useAuth(authFirebase) {
    const [authentificaion, setAuthentificaion] = useState(null);

    const auth = authFirebase();
    const provider = new authFirebase.GoogleAuthProvider();

    const login = () => auth.signInWithPopup(provider);
    const logout = () => auth.signOut().catch(err => console.error())

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            console.log(user);
            if (user) {
                setAuthentificaion(user)
            } else {
                setAuthentificaion(null)
            }
        });
    }, [auth, authentificaion]);

    return {authentificaion, login, logout};
}
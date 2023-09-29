import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/config.js';
import { Spin } from 'antd';
export const AuthContext = React.createContext();

export default function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);
    React.useEffect(() => {
        const unsubscribeb = auth.onAuthStateChanged((user) => {
            console.log({ user })
            if (user) {
                //lay ra nhung thu can tu api 
                const { displayName, email, uid, photoUrl } = user;
                setUser({ displayName, email, uid, photoUrl });
                setIsLoading(false);//ngung loading
                history.push('/')
                return;
            }
            setIsLoading(false);
            history.push('/login')// login lai
        })
        // clear function
        return () => {
            unsubscribeb();
        }
    }, [history])
    return (
        <AuthContext.Provider value={{ user }} >
            {isLoading ? <Spin /> : children}
        </AuthContext.Provider >
    )
}

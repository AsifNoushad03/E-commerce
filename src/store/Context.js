import {createContext, useState} from 'react'

export const FirebaseContext = createContext(null)

export const Authcontext = createContext(null)


export default function Context({ children }) {
    const [user, SetUser] = useState(null)

    return (
        <Authcontext.Provider value={{user,SetUser}}>
            {children}
        </Authcontext.Provider>
    )

}
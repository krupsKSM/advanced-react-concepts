import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface User {
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
    error: string | null;
}

// Create a context to share auth state across the app
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<User | null>(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState<string | null>(null);

    // On initial load, try to fetch user from localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser))
            } catch (error) {
                console.error("Failed to parse stored User: ", error);
                localStorage.removeItem('user')
            }
        }
    }, []);

    const login = async(email:string , password:string)=> {
        
        setLoading(true);
        setError(null);

        return new Promise<void>((resolve , reject)=>{
            setTimeout(()=>{
                if(email === "admin@example.com" && password === "password123"){
                    const loggedInUser = {name: "Anamika" , email};
                    setUser(loggedInUser);
                    localStorage.setItem("user", JSON.stringify(loggedInUser));
                    resolve();
                }else{
                    setError("Invalid credentials");
                    reject(new Error("Invalid credentials"))
                }
                setLoading(false)
            },1000);
        });
    }
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading, error}}>
            {children}
        </AuthContext.Provider>
    )

}
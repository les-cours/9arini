
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {useAuth} from "./AuthContext";

const ProtectedRoute = (WrappedComponent) => {
    return (props) => {
        const { user, loading } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!loading && !user) {
                router.push('/login');
            }
        }, [loading, user]);

        if (loading || !user) {
            return <p>Loading...</p>;
        }

        return <WrappedComponent {...props} />;
    };
};

export default ProtectedRoute;
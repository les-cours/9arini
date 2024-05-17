import { useEffect } from 'react';
import { useRouter } from 'next/router';
import {useAuth} from "./AuthContext";

const withAuth = (WrappedComponent: React.ComponentType) => {
    const Component = (props: any) => {
        const { isAuthenticated } = useAuth();
        const router = useRouter();

        console.log("here " ,isAuthenticated)
        useEffect(() => {
            if (!isAuthenticated) {
                router.push('/login');
            }
        }, [isAuthenticated, router]);

        if (!isAuthenticated) {
            return null; // Optionally, you can return a loading spinner here
        }

        return <WrappedComponent {...props} />;
    };

    return Component;
};

export default withAuth;
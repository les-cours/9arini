import ProtectedRoute from '../contexts/auth/ProtectedRoute';

function ProtectedPage() {
    return <div>This is a protected page</div>;
}

export default ProtectedRoute(ProtectedPage);
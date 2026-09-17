import { link } from 'react-router-dom';
import { LayoutGrid, LogOut} from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar() {
    const { user, LogOut } = useAuth();

    return (
        <nav className='navbar'>
            <link to="/equipos" className="brand">
                <layoutGrid size={22} />
                LAB CRUD
            </link>

            <div className='nav-right'>
                <span>
                    {user?.nombre} · <strong>{user?.rol}</strong>
                </span>
                <button className='secondary' onClick={LogOut}>
                    <LogOut size={16} />
                    Cerrar sesión
                </button>
            </div>
        </nav>
    );
}
z
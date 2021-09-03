import Link from 'next/link';
import classes from './header.module.css';

const Header = () => {
    return <nav className={classes.nav}>
        <div>
            <Link href="/">Events Logo</Link>
        </div>
        <div>
            <Link href="/events">
                <a>Browse All Events</a>
            </Link>
        </div>
    </nav>
}

export default Header;
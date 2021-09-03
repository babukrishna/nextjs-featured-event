import { Fragment } from "react";
import Header from './header';

const Layout = (props) => {
    return(
        <Fragment>
            <Header />
            <div>{props.children}</div>
        </Fragment>
    )
}

export default Layout;
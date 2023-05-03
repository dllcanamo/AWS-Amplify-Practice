import classes from "./top-navbar.module.css"

function TopNavbar() {
    return (
        <div className={classes.topNavbar}>
            <div className={classes.logoDiv}>logo heres</div>
            <div className={classes.logoutDiv}>
                <button className={classes.logoutBtn}>
                    <p>Logout</p>
                </button>
            </div>
        </div>
    )
}

export default TopNavbar;
const Nav = () => {
    return (
    <div className="navigation">
        <a className="navigation-icon">
            <span style={{ width: '100%' }}></span>
            <span style={{ width: '70%' }}></span>
            <span style={{ width: '50%' }}></span>
        </a>
        <div className="navigation-content">
            <div className="navigation-links">
                <a href="profile" title="Profile"><img src="https://assets.pebblo.org/images/icon/customer.png" alt="" /></a>
                <a href="library" title="Library"><img src="https://assets.pebblo.org/images/icon/rucksack.png" alt="" /></a>
                <a href="explore" title="Explore"><img src="https://assets.pebblo.org/images/icon/explore.png" alt="" /></a>
                <a href="settings" title="Settings"><img src="https://assets.pebblo.org/images/icon/cog.svg" alt="" /></a>
            </div>
        </div>
    </div>
    )
}

export default Nav;
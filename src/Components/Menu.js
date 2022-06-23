
function Menu(props) {
    return (
        <div className="menu">
            <div className='menuLogo'>
                {props.icon}
            </div>
            <div className='menuName'>
                {props.name}
            </div>
        </div>
    );
}

export default Menu;
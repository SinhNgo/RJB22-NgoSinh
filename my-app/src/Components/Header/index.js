function Header(props) {
    const {color, size} = props;
    return ( 
        <>
            <div style={{color: color, fontSize: size}}>Header{color}{size}</div>
        </>
     );
}

export default Header;

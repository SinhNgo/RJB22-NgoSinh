import './style.css'
function CompCol(props) {
    const {column, text, color} = props;
    return ( 
        <div className="pill">
            <div className="column">
                <div className="col-1" style={{backgroundColor:color, height:`${column}%`}}></div>
            </div>
            <div className="day">{text}</div>
        </div>
     );
}

export default CompCol;
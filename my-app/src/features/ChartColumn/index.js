import CompCol from "../CompCol";
import './style.css'

function ChartColumn(props) {
    const {texts, total} = props;
    return ( 
        <div className="cards">
            <div className="header">
                <div className="info">{texts}</div>
                <div className="data">{total}</div>
            </div>
            <div className="border"></div>
            <div className="chart-col">
                <div><CompCol text="MON" column={50} color="red"></CompCol></div>
                <div><CompCol text="TUE" column={20} color="blue"></CompCol></div>
                <div><CompCol text="WED" column={70} color="yellow"></CompCol></div>
                <div><CompCol text="THU" column={30} color="green"></CompCol></div>
                <div><CompCol text="FRI" column={80} color="violet"></CompCol></div>
            </div>
        </div>
     );
}

export default ChartColumn;
import Chart from "./features/ChartBar1";
import Chart2 from "./features/ChartBar2";
import SocialBlock from "./features/ChartBar3";
import ChartColumn from "./features/ChartColumn";
import Room from "./features/Room";
import Shirt from "./features/Shirt";
import Young from "./features/Young_Shop";
function HomeWork2() {
  return (
    <div>
      <Shirt></Shirt>
      <Young></Young>
      <Room></Room>
      <div>
        <Chart
          text="BANDWIDTH"
          color1="#DC143C"
          colors="red"
          percentage={20}
        ></Chart>
        <Chart
          text="STORAGE"
          color1="#00008B"
          colors="blue"
          percentage={50}
        ></Chart>
        <Chart
          text="USERS"
          color1="#FFD700"
          colors="yellow"
          percentage={70}
        ></Chart>
        <Chart
          text="EMAIL"
          color1="#DC143C"
          colors="red"
          percentage={30}
        ></Chart>
        <Chart
          text="BASIC"
          color1="#00008B"
          colors="blue"
          percentage={40}
        ></Chart>
        <Chart
          text="OTHERS "
          color1="#FFD700"
          colors="yellow"
          percentage={60}
        ></Chart>
      </div>
      <Chart2
        title="rgb(17, 182, 64)"
        name="HTML"
        followings="rgb(17, 182, 64)"
        likes={50}
      ></Chart2>
      <Chart2
        title="#DC143C"
        name="CSS"
        followings="#DC143C"
        likes={70}
      ></Chart2>
      <Chart2
        title="#6495ED"
        name="PHP"
        followings="#6495ED"
        likes={40}
      ></Chart2>
      <div className="chart-3">
        <SocialBlock
          color="#6495ED"
          text="Facebook"
          total="500,000"
          init="Likes"
        ></SocialBlock>
        <SocialBlock
          color="#00BFFF"
          text="Twitter"
          total="40,000"
          init="Tweets"
        ></SocialBlock>
        <SocialBlock
          color="#E9967A"
          text="Google+"
          total="460,000"
          init="Plus"
        ></SocialBlock>
        <SocialBlock
          color="#DC143C"
          text="Pinterest"
          total="34,000"
          init="Pins"
        ></SocialBlock>
      </div>
      <div className="chart-3">
        <ChartColumn
          texts="TODAY'S VISITTORS"
          total="24,599"
          unit=""
          percentages={20}
        ></ChartColumn>
        <ChartColumn
          texts="YESTERDAY'S VISITTORS"
          total="15,699"
          unit=""
          percentages={20}
        ></ChartColumn>
        <ChartColumn
          texts="TOTAL DOWNLOADS"
          total="1,224,599"
          unit=""
          percentages={20}
        ></ChartColumn>
        <ChartColumn
          texts="CURRENT INCOME"
          total="914,599"
          unit=""
          percentages={20}
        ></ChartColumn>
      </div>
    </div>
  );
}

export default HomeWork2;

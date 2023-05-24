import { Widget } from 'components/Widget';
import { TopCreator } from 'components/TopCreator';
import { PrimaryLayout } from "components/Layout";

const Home = () => {
  return (
    <PrimaryLayout>
      <div className="App">

        <div className='card'>
          <Widget
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>
          <Widget
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>
          <Widget
            percent={-12.3}
            text={"ROI"}
            price={"14.02"}
            unit={"%"} >
          </Widget>
          <Widget
            boderColor={"red"}
            percent={12.3}
            text={"Revenue"}
            price={"5.00"}
            unit={"ETH"} >
          </Widget>

        </div>
        <div>
          <TopCreator></TopCreator>
        </div>

      </div>
    </PrimaryLayout>


  );
};

export default Home;
import Countdown from "react-countdown-simple";
//The original package code - counts down form one hour
/* const newDate = new Date(
  new Date().setHours(new Date().getHours() + 1)
).toISOString(); */

//A version that works but not set up like the package code
/* const toLCF = new Date();
toLCF.setFullYear(2023, 5, 30); */

//A version that works and are set up like the package code but refreshes .. FUCK IT
const toLCF = new Date(new Date().setFullYear(2023, 5, 30)).toISOString();

function App() {
  return (
    <div className="App">
      <>
        <h1>LOUDCROWD FESTIVAL IN</h1>
        <Countdown className={"countdown"} targetDate={toLCF} />
      </>
    </div>
  );
}

export default App;

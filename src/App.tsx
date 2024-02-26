import "./App.css";
import BetterTable from "./BetterTable";
import { mockData, mockHeaders } from "./mockData";

function App() {
  return (
    <>
      <BetterTable
        caption="testing just testing"
        headers={mockHeaders}
        rows={mockData}
      />
    </>
  );
}

export default App;

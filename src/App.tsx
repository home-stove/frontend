import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-black min-w-full flex justify-center items-center flex-col">
      <h1 className="text-4xl font-josefinSans text-white">HOME STOVE</h1>
      <p className="text-2xl font-montserrat text-white mt-5">
        UI/UX in process
      </p>
      <Button disabled variant={"default"} className=" mt-5">
        <Loader2 className="animate-spin">Processing</Loader2>
      </Button>
    </div>
  );
}

export default App;

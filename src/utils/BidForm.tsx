import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {
    min: number,
    max: number,
};

function BidForm({min, max}: Props) {
  
  return (
    <div className="w-full mx-auto md:mx-0 space-y-4 bg-white xxxxs:w-[340px] xxxs:w-[355px] xxs:w-[370px] xs:w-[390px] sm:w-[410px] md:w-full">
      <h2 className="text-xl font-bold">Make Your Bid</h2>

      <div className="space-y-2">
        <label htmlFor="bid" className="block text-sm font-medium">
          Your Bid Amount
        </label>
        <Textarea id="bid" placeholder={min + " - " + max} className="w-full" />
      </div>

      <div className="space-y-2">
        <label htmlFor="name" className="block text-sm font-medium">
          Your Name
        </label>
        <Input id="name" placeholder="Name" className="w-full" />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium">
          Your Email
        </label>
        <Input id="email" type="email" placeholder="Email" className="w-full" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="save-info" />
        <label htmlFor="save-info" className="text-sm">
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>
      </div>

      <Button className="w-full bg-green-500 hover:bg-green-600">
        Submit bid
      </Button>
    </div>
  );
}

export default BidForm;

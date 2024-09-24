import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

type Props = {};

function ReviewForm({}: Props) {
  const [rating, setRating] = useState(0);

  return (
    <div className="w-full max-w-md mx-auto space-y-4 bg-white xxxxs:max-w-[340px] xxxs:max-w-[355px] xxs:max-w-[370px] xs:max-w-[390px] sm:max-w-[410px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px]">
      <h2 className="text-xl font-bold">Add a review</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">
          Your Rating for this listing
        </label>
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className={`text-2xl ${
                star <= rating ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="comment" className="block text-sm font-medium">
          Your Comment
        </label>
        <Textarea id="comment" placeholder="Comment" className="w-full" />
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
        Submit Review
      </Button>
    </div>
  );
}

export default ReviewForm;

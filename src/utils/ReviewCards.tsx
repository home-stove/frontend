import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  reviews: Array<{
    reviewer: string;
    rating: number;
    review: string;
    date: string;
  }>;
};

function ReviewCards({ reviews }: Props) {
  return (
    <div className="">
      {reviews.map((review, index) => (
        <div key={index} className={`w-72 md:w-auto ${index !== 0 && "my-5"}`}>
          <div className="flex gap-x-3">
            <Avatar className="w-16 h-16 xxxs:h-24 xxxs:w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col justify-center">
              <h3>{review.reviewer}</h3>
              <div className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 15 15"
                >
                  <path
                    fill="#e7b900"
                    d="M7.223.666a.3.3 0 0 1 .554 0L9.413 4.6a.3.3 0 0 0 .253.184l4.248.34a.3.3 0 0 1 .171.528L10.85 8.424a.3.3 0 0 0-.097.297l.99 4.145a.3.3 0 0 1-.45.326L7.657 10.97a.3.3 0 0 0-.312 0l-3.637 2.222a.3.3 0 0 1-.448-.326l.989-4.145a.3.3 0 0 0-.097-.297L.915 5.652a.3.3 0 0 1 .171-.527l4.248-.34a.3.3 0 0 0 .253-.185z"
                  ></path>
                </svg>
                <p className="font-semibold">&nbsp;{review.rating}</p>
                <p className="text-[#797979]">
                  &nbsp;&nbsp;&nbsp;&nbsp;({review.date})
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#6b7177] mt-4 leading-7">
            {review.review}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ReviewCards;

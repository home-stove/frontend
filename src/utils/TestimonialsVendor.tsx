import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    title: "Professional Baker",
    image: "https://example.com/emily-carter.jpg",
    testimonial:
      "This platform has completely transformed my business! I went from having just a few orders a month to being booked solid. The job opportunities are endless, and the process is so easy to follow. I highly recommend it to any baker looking to grow their business.",
  },
  {
    id: 2,
    name: "Michael Thompson",
    title: "Pastry Chef",
    image: "https://example.com/michael-thompson.jpg",
    testimonial:
      "I was skeptical at first, but signing up here was the best decision I’ve ever made for my baking career. The ability to showcase my work and bid on jobs has opened up so many new opportunities. Plus, the customer support is fantastic!",
  },
  {
    id: 3,
    name: "Sarah Lee",
    title: "Home Baker",
    image: "https://example.com/sarah-lee.jpg",
    testimonial:
      "As a home baker, I never thought I could turn my passion into a full-time job. This platform made it possible. The clients I’ve connected with through this site are amazing, and I’ve been able to build a loyal customer base.",
  },
  {
    id: 4,
    name: "James Anderson",
    title: "Cake Artist",
    image: "https://example.com/james-anderson.jpg",
    testimonial:
      "The interface is user-friendly, and the variety of jobs available is impressive. I’ve been able to grow my business significantly since joining. The ability to directly communicate with customers ensures that every job is done to their satisfaction.",
  },
  {
    id: 5,
    name: "Olivia Baker",
    title: "Cupcake Specialist",
    image: "https://example.com/olivia-baker.jpg",
    testimonial:
      "I love how easy it is to showcase my work and connect with customers who appreciate the art of baking. The platform is intuitive, and I’ve never had any issues with payments. It’s a game-changer for anyone in the baking industry!",
  },
];

function TestimonialsVendor({}: Props) {
  return (
    <section className="relative py-9 md:py-11 px-4 md:px-24 xl:px-44 3xl:px-60 5xl:px-[30rem] font-montserrat text-[#0c0c0c] 5xl:h-[70vh] 5xl:flex 5xl:justify-center 5xl:items-center">
      <div>
        <div>
          <div className="mb-3 xl:mb-4">
            <h1 className="text-center text-[1.3rem] xxxxs:text-[1.45rem] lg:text-3xl 5xl:text-4xl font-semibold">
              Hear from Our Bakers
            </h1>
          </div>
          <div className="px-2 mb-7 xl:mb-8">
            <p className="text-center text-sm">
              Discover how we’ve helped bakers like you find success and grow
              their business.
            </p>
          </div>
          <div className="mb-3 xl:mb-4 4xl:mb-7">
            <img
              className="mx-auto"
              src="https://storagehomestovedev.blob.core.windows.net/web/VendorHome/quote-icon.png?sp=r&st=2024-08-26T18:30:04Z&se=2025-08-27T02:30:04Z&spr=https&sv=2022-11-02&sr=b&sig=AQfBuOhmbWCJwsJJyEfowZ0Svyq%2BJf3j8VFthKimVtg%3D"
              alt="quote icon"
            />
          </div>
        </div>
        <div className="">
          <Carousel>
            <CarouselContent>
              {testimonials.map((item) => (
                <CarouselItem key={item.id}>
                  <div className="mb-7 4xl:mb-14 px-3.5">
                    <p className="text-center italic font-semibold xl:text-2xl 2xl:leading-10 select-none">{item.testimonial}</p>
                  </div>
                  <div className="mb-7">
                    <div>
                      <p className="text-center font-semibold">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-center font-light">{item.title}</p>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsVendor;

import { StarIcon } from "./icons/IconShapes";

interface Review {
  stars: number;
  title: string;
  content: string;
  author: string;
}

const reviews: Review[] = [
  {
    stars: 4,
    title: "Touchscreen is great!",
    content: "I've only set up NextCloud so far, but everything's been running smooth. The touchscreen makes a huge difference. I can see if something's off or just restart apps right there. I used to have a Synology NAS and half the time I didn't even realize it had disconnected until I needed something.",
    author: "Paul Rodrigues"
  },
  {
    stars: 5,
    title: "Easy setup, works as expected.",
    content: "I just got a Navicom Node up and running. I went with the base model since I primarily needed the backup. I haven't had any issues syncing my images and videos. I'm able to share access to my content with others as well, which is a nice touch.",
    author: "Chris Mason"
  },
  {
    stars: 4,
    title: "Amazing Experience with Navicom Nodes!",
    content: "As a freelance photographer, I deal with hundreds of gigabytes of RAW image files and video footage. I chose the Navicom One Core so that I can back all my work locally, keep full control of it, and avoid paying monthly cloud-storage fees that keep piling up. I plug my card reader into the unit, transfer files overnight via its gigabit network, and the built-in RAID capability gives me peace of mind in case one drive fails.",
    author: "Daniel Hayden"
  }
];

const ReviewsSection = () => {
  return (
    <section className="bg-panel-cream py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-black text-center mb-16">
          Customer Reviews
        </h2>
        
        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    filled={i < review.stars}
                    className={`w-5 h-5 ${i < review.stars ? 'text-text-black' : 'text-text-black/20'}`}
                  />
                ))}
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-text-black mb-4">
                {review.title}
              </h3>
              
              {/* Content */}
              <p className="text-text-black/70 text-sm leading-relaxed mb-6">
                {review.content}
              </p>
              
              {/* Author */}
              <p className="font-bold text-text-black">
                {review.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;

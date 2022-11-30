import { gallery } from "../data/gallery";
import galleryVideo from "../assets/videos/gallery-video.mp4";
import { FaPlay } from "react-icons/fa";

const Gallery = () => {
  return (
    <div className="section-bg bg-gradient-to-br from-rose-500 to-rose-700">
      <section className="gallery-section container mx-auto py-20 text-rose-100">
        <h3 className="section-title uppercase font-bold text-sm tracking-widest mb-10 text-center">
          Watch our reels
        </h3>
        <div className="gallery grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="gallery-l grid grid-cols-4 gap-3">
            {gallery.map((img) => (
              <div
                className="img h-40 w-full border-4 border-rose-100 shadow-lg"
                key={img.id}
                style={{
                  backgroundImage: `url(${img.img})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ))}
          </div>
          <div className="gallery-r flex flex-col gap-5">
            <h2 className="main-headline text-3xl mb-5 lg:w-4/5">
              Enjoy our amazing stories, and have fun
            </h2>
            <p className="opacity-60 lg:w-4/5">
              This time, we've gathered the most beautiful moments of your life.
              Enjoy the best spa experience that only we can offer you. Enjoy
              our amazing massage and get a relaxing facial treatment which will
              make you feel like a queen. You deserve it!
            </p>
            <p className="opacity-60 lg:w-4/5">
              When you're looking for a relaxing, rejuvenating experience, look
              no further! Check out this beauty video with all sorts of great
              tips, tricks, and advice for keeping your skin looking fresh &
              glowing. Sit back, relax, and enjoy!
            </p>
            <a href="#" className="flex items-center gap-3 my-5 text-2xl">
              <span>
                <FaPlay />
              </span>{" "}
              <span className="uppercase tracking-widest font-medium text-transparent bg-clip-text bg-gradient-to-br from-rose-100 to-rose-400">
                Watch more
              </span>
            </a>
            <div className="reel border-4 border-rose-100 shadow-lg">
              <video src={galleryVideo} loop autoPlay muted></video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

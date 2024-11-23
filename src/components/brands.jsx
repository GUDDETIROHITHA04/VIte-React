import boltshift from "../assets/boltshift.png";
import lightbox from "../assets/lightbox.png";
import featherdev from "../assets/featherdev.png";
import spherele from "../assets/spherele.png";
import globalbank from "../assets/globalbank.png";
import nietzsche from "../assets/nietzsche.png";

export default function Brands() {
  return (
    <div className="container py-24 flex flex-col justify-center items-center gap-8 mx-auto">
      <p className="text-gray-700 font-medium">
        Join 4,000+ companies already growing
      </p>
      <div className="grid  grid-cols-1 sm:grid-cols-6 gap-4">
        <img src={boltshift} alt="boltshift" />
        <img src={lightbox} alt="lightbox" />
        <img src={featherdev} alt="featherdev" />
        <img src={spherele} alt="spherele" />
        <img src={globalbank} alt="globalbank" />
        <img src={nietzsche} alt="nietzsche" />
      </div>
    </div>
  );
}

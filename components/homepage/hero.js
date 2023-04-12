import classes from "./hero.module.css";
import Image from "next/image";
function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sacred-heart.jpeg"
          alt="Sacred heart of Jesus"
          width={300}
          height={300}
        />
      </div>
      <h1> Hi I am Ricardo</h1>
      <p>
        I blog about becoming the best version of yourself, with God at the
        center. In everything that I do, I keep Christ at the center. Jesus is
        my anchor
      </p>
    </section>
  );
}

export default Hero;

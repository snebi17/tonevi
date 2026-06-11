import HeroVideo from "@/app/hero";
import Image from "next/image";
import Logo from "@/public/logo.png";

export default function Home() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <HeroVideo />
      <div style={{ position: "absolute" }}>
        <Image src={Logo} objectFit="contain" alt="Logo"></Image>
        <h1 style={{ fontSize: "4rem", textAlign: "center", fontFamily: 'libre-baskerville', fontStyle: 'italic' }}>Coming soon</h1>
        <h1 style={{ fontSize: "1.2rem", textAlign: "center", textTransform: 'uppercase', marginTop: '2rem' }}>
          <a href="https://maps.app.goo.gl/ubUEMJHx13Mt7QKF7">Slovenija, Goriška brda, Zali Breg 6</a><br></br>
          <a href="mailto:tonevi.markocic@gmail.com">tonevi.markocic@gmail.com</a> · <a href="">Leon 040 683 481</a>
        </h1>
      </div>
    </section>
  );
}

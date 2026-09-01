import Image from "next/image";
import Navbar from "../../components/Navbar/navbar";
import Hero from "../../components/Hero/hero";
import Services from "../../components/Services/services";
import Products from "../../components/Products/products";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Partners from "../../components/Partners/partners";
import Customers from "../../components/Customers/customers";
import NewsInsights from "../../components/NewsInsights/newsinsights";
import Verticals from "../../components/Verticals/verticals";
import Footer from "../../components/Footer/footer";
import Startups from "../../components/Startups/startups";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Startups />
      <Products />
      <HowItWorks />
      <Partners />

      <NewsInsights />
      <Customers />
      <Verticals />
      <Footer />
    </>
  );
}

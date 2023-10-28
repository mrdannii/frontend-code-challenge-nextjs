import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Productcard from "@/components/Productcard";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-10">
        <div className="mb-0 grid text-center   lg:grid-cols-4 lg:text-left m-5">
          <Productcard
            name="asdsa"
            price="200"
            img="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          />
        </div>
      </main>
      <Footer/>
    </>
  );
}

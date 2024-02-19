import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const TableData = [
  {
    description: "Product discovery and building what matters",
  },
  {
    description: "Measuring to ensure updates are a success",
  },
  {
    description: "And much more!",
  },
];

export default function Home() {
  return (
    <div className="bg-[hsl(235,18%,26%)] min-h-screen w-full flex items-center justify-center">
      <main className="bg-white rounded-2xl p-5  ">
        <div className="flex flex-wrap gap-5 ">
          <div className="p-10 w-[500px]">
            <h2 className="font-bold text-5xl text-slate-800">Stay updated!</h2>
            <p className="text-slate-600 pt-5 text-xl">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div>
              <div className="text-slate-600 pt-5">
                {TableData.map((d, i) => (
                  <p key={i} className="flex gap-3 mt-2">
                    <FaCircleCheck className="text-orange-500 relative top-[3px]" />

                    <span className="text-md">{d.description}</span>
                  </p>
                ))}

                <div className="mt-5">
                  <p className="font-semibold">Email Address</p>
                  <Input type="email" placeholder="Email" className="mt-2" />
                </div>

                <div>
                  <Button className="bg-[hsl(234,29%,20%)] w-full text-white text-md h-11 mt-5">
                    Subscribe to monthly newsletter
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              height={593}
              width={400}
              src={
                "https://newsletter-form-alpha.vercel.app/_next/static/media/illustration-sign-up-desktop.04371c02.svg"
              }
              alt="newsletter-picture"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

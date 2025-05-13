
import Image from "next/image";
import Header from "@/app/component/header";
import Register from "@/app/component/register";
import background from "@/app/asset/svg/background.svg";
import HeapAnalytics from "@/app/analytics/HeapAnalytics";

export const metadata = {
  title: "5 day Landing page masterclass for saas and bootstrap founders",
  description: "A 5 day email landing page course + free template",
};

const formId = "7627004";

export default function LeadMag1() {
  return (
    <div className="relative flex flex-col items-center lg:py-12 lg:h-screen gap-6 lg:justify-between overflow-hidden">
      <HeapAnalytics />
      <Image
        src={background}
        alt="Background"
        className="absolute top-[30%] lg:top-[63%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[799px]"
      />
      <Header />
      <Register formId={formId} />
    </div>
  );
}

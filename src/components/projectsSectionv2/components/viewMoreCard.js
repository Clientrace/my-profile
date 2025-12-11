import { useRouter } from "next/router";

export const ViewMoreCard = ({}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/projects")}
      className="relative p-6 w-72 h-72 cursor-pointer"
      style={{ backgroundColor: "#121212" }}
    >
      <div
        className="absolute w-full h-full top-0 left-0"
        style={{
          backgroundImage: "url('/assets/floating-satellite.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }}
      />
      <div className="flex align-middle items-center justify-center text-gray-100 h-full w-full">
        <div className="w-fit h-fit">
          <div>View More</div>
        </div>
      </div>
    </div>
  );
};

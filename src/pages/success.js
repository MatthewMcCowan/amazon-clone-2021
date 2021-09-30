import Header from "../components/Header";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-200 min-h-screen">
      <Header />
      <main className="max-w-screen-lg mx-auto ">
        <div className="bg-white p-10 m-10 flex flex-col space-y-5">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank You! Your Order has been confirmed!
            </h1>
          </div>
          <p>
            Thank you message. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Adipisci voluptas totam aspernatur explicabo fugit
            deserunt veniam cupiditate quaerat blanditiis voluptates.
          </p>
          <button onClick={() => router.push("/orders")} className="button">
            Go to My Orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default success;

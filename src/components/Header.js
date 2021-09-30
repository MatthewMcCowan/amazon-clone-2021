import Image from "next/image";
import {
  SearchIcon,
  MenuIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const [session, loading] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <section className="flex items-center justify-between p-2 bg-amazon_blue">
        <div className="flex mt-2 ">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Section */}
        <div className="hidden md:flex rounded-md cursor-pointer items-center bg-yellow-400 h-10 flex-grow hover:bg-yellow-500 max-w-full">
          {/* <div className="flex bg-gray-200 h-full p-2 items-center text-xs rounded-l-md">
            <p className="mr-2">Amazon Devices</p>
            <ChevronDownIcon className="h-3" />
          </div> */}
          {/* <div className="flex items-center bg-gray-200 h-full  rounded-l-md">
            <form className="">
              <select
                name="options"
                id="amazon-options"
                className=" bg-gray-200 border-none focus:ring-0 p-2  "
              >
                <option value="all_departments" className="text-md  uppercase ">
                  All Departments
                </option>
                <option value="amazon_device" className="text-md  uppercase ">
                  Amazon Devices
                </option>
                <option value="amazon_device" className="text-md  uppercase ">
                  More...
                </option>
              </select>
            </form>
          </div> */}

          <input
            type="text"
            placeholder="Search"
            className="h-full flex-grow p-2 flex-shrink focus:ring-0 border-none rounded-l-md"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right Section */}
        <div className="text-white flex justify-center mx-6 space-x-6 whitespace-nowrap">
          <div
            onClick={() => (!session ? signIn() : signOut())}
            className="hover:cursor-pointer border border-amazon_blue hover:border-white p-2"
          >
            <p className="text-xs font-semibold">
              {!session ? "Please Login" : `Hello ${session.user.name}`}
            </p>
            <p className="text-sm font-bold -mt-1">Account & Lists</p>
          </div>
          <div
            onClick={() => session && router.push("/orders")}
            className="hover:cursor-pointer border border-amazon_blue hover:border-white p-2"
          >
            <p className="text-xs font-semibold">Returns</p>
            <p className="text-sm font-bold -mt-1">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="flex items-center relative border border-amazon_blue hover:border-white p-2 cursor-pointer"
          >
            <ShoppingCartIcon className="h-10" />
            <p className="font-bold hidden md:inline">Cart</p>
            <p className="absolute top-1 right-9 h-6 w-6 text-center text-black bg-yellow-200 rounded-full font-extrabold">
              {items.length}
            </p>
          </div>
        </div>
      </section>
      <section className="flex items-center text-white text-sm p-2 bg-amazon_blue-light space-x-4">
        <p className="flex items-center pl-6">
          <MenuIcon className="h-6 mr-2" />
          All
        </p>
        <p>Prime Video</p>
        <p>Amazon Business</p>
        <p>Today's Deals</p>
      </section>
    </header>
  );
};

export default Header;

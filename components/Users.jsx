import React from "react";
import Search from "./Search";
import Image from "next/image";

const Users = () => {
  return (
    <>
      <div className="bg-white shadow-lg p-5 rounded-lg mt-5">
        <Search placeholder="Search for a user..." />
        <table className="w-full">
          <thead>
            <tr>
              <td className="p-3">Name</td>
              <td className="p-3">Email</td>
              <td className="p-3">Created At</td>
              <td className="p-3">Status</td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                  Suhail
                </div>
              </td>
              <td className="p-3">suhail@gmail.com</td>
              <td className="p-3">14-11-2023</td>
              <td className="p-3">Active</td>
            </tr>
            <tr className="border-t">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <Image
                    src={"/noavatar.png"}
                    alt=""
                    width={40}
                    height={40}
                    className=""
                  />
                  Suhail
                </div>
              </td>
              <td className="p-3">suhail@gmail.com</td>
              <td className="p-3">14-11-2023</td>
              <td className="p-3">Active</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;

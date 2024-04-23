import React, { useState } from "react";
import { useRouter } from "next/router";

const Navigator = () => {

  const router = useRouter();
  const routes = [
    { name: "Home", route: "/" },
    { name: "Projects", route: "/projects" },
  ]

  return <div className="flex justify-center text-center">
    <div className="flex w-full py-1 w-max mb-2">
      {
        routes.map((route) => {
          return <div className="mx-2 cursor-pointer hover:font-bold" onClick={() => router.push(route.route)}>
            {route.name}
          </div>
        })
      }
    </div>
  </div>
}


export default Navigator;


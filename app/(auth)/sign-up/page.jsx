import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Register from "@/components/Register";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return (
    <>
      <Register />
    </>
  );
};

export default page;

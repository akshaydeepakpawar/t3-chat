import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { ChatSidebar } from "../../modules/chat/components/chat-sidebar";
import { currentUser } from "@/modules/authentication/actions/index";
import { getAllChats } from "@/modules/chat/actions/index";
import Header from "../../modules/chat/components/Header";

const layout = async ({ children }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = await currentUser();

  if (!session) {
    return redirect("/sign-in");
  }

  const {data:chats}= await getAllChats();

  return (
    <div className="flex h-screen overflow-hidden">
      <ChatSidebar user={user} chats={chats}/>
      <main className="flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
};

export default layout;

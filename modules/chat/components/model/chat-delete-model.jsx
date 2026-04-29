"use client";

import Model from "@/components/ui/model";
import { useDeleteChat } from "@/modules/chat/hooks/chat";
import { toast } from "sonner";

const DeleteChatModel = ({ isModelOpen, setIsModelOpen, chatId }) => {
  const { mutateAsync, isPending } = useDeleteChat(chatId);

  const handleDelete = async () => {
    try {
      await mutateAsync();
      toast.success("chat deleted successfully");
      setIsModelOpen(false);
    } catch (error) {
      toast.error("failed to delete chat");
      console.error("Failed to delete chat:", error);
    }
  };
  return (
    <Model
      title="Delete Chat"
      description="Are you sure you want to delete this chat? this action cannot be undone."
      isOpen={isModelOpen}
      onSubmit={handleDelete}
      submitText={isPending ? "Deleting..." : "Delete"}
      submitVariant="destructive"
      onClose={() => {
        setIsModelOpen(false);
      }}
    >
      <p className="text-sm text-zinc-500">
        Once deleted, all requests and data in this chat will be permanantky
        removed.
      </p>
    </Model>
  );
};

export default DeleteChatModel;

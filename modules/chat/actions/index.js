"use server";

import db from "@/lib/db";
import { currentUser } from "@/modules/authentication/actions";
import { MessageRole, MessageType } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createChatWithMessage = async (values) => {
  try {
    const user = await currentUser();

    if (!user)
      return {
        success: false,
        message: "Unauthorized user",
      };

    const { content, model } = values;

    if (!content || !content.trim()) {
      return { success: false, message: "Message content is required" };
    }
    const title = content.slice(0, 50) + (content.length > 50 ? "..." : "");

    const chat = await db.Chat.create({
      data: {
        title,
        model,
        userId: user.id,
        message: {
          create: {
            content,
            messageRole: MessageRole.USER,
            messageType: MessageRole.NORMAL,
            model,
          },
        },
      },
      include: {
        message: true,
      },
    });
    revalidatePath("/");

    return { success: true, message: "Chat created Successfully", data: chat };
  } catch (error) {
    console.error("Error creating chat:", error);
    return { success: false, message: "Failed to create chat" };
  }
};

export const getAllChats = async () => {
  try {
    const user = await currentUser();

    if (!user)
      return {
        success: false,
        message: "Unauthorized user",
      };

    const chats = await db.Chat.findMany({
      where: {
        userId: user.id,
      },
      include: {
        message: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return {
      success: true,
      message: "Chats fetched successfully",
      data: chats,
    };
  } catch (error) {
    console.error("Error fetching chats:", error);
    return {
      success: false,
      message: "Failed to fetch chats",
    };
  }
};

export const deleteChat = async (chatId) => {
  try {
    const user = await currentUser();
    if (!user)
      return {
        success: false,
        message: "Unauthorized user",
      };

    const chat = await db.Chat.findFirst({
      where: {
        id: chatId,
        userId: user.id,
      },
    });
    if (!chat) {
      return {
        success: false,
        message: "Chat not found",
      };
    }

    await db.Chat.delete({
      where: {
        id: chatId,
      },
    });
    revalidatePath("/");
    return {
      success: true,
      message: "Chat deleted successfully",
    };
  } catch (error) {
    console.error("Error deleting chat:", error);
    return {
      success: false,
      message: "Failed to delete chat",
    };
  }
};

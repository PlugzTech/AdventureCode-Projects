import { MessagesApp } from "../../components/messages-app";
import { listMessages, sanitizeUser } from "../../lib/db";
import { requireWorkspaceUser } from "../../lib/server-page-auth";

export const metadata = {
  title: "Messages",
  robots: {
    index: false,
    follow: false
  }
};

export default async function MessagesPage() {
  const session = await requireWorkspaceUser();
  const messages = await listMessages(session.user.id);

  return <MessagesApp initialState={{ user: sanitizeUser(session.user), messages }} />;
}

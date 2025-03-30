import { useEffect, useRef, useState } from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
  DocumentData,
} from 'firebase/firestore';
import { db } from '../services/firebase';

import Message from './Message';
import SendMessage from './SendMessage';

function Chat() {
  const [messages, setMessages] = useState<any[]>([]);
  const scroll = useRef<null | HTMLSpanElement>(null);
  // const navigate = useNavigate();
  // const user = auth.currentUser;

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc'),
      limit(50),
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messageData: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        messageData.push({ ...doc.data(), id: doc.id });
      });

      const sortedMessages = messageData.sort(
        (a, b) => a.createdAt - b.createdAt,
      );
      setMessages(sortedMessages);
    });

    return () => unsubscribe();
  }, []);

  // TODO: Only scroll to bottom when user sends message, not on received
  useEffect(() => {
    scroll.current?.scrollIntoView();
  }, [messages]);

  // const logoutUser = async (e: ReactMouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();

  //   await signOut(auth);
  //   navigate('/');
  // };

  return (
    <main className="chat-box flex flex-col justify-end h-screen w-full">
      <div className="messages-wrapper mb-2 pb-2 overflow-y-auto">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
        <span ref={scroll} />
      </div>
      <SendMessage />
    </main>
  );

  // return (
  //   <div className="container">
  //     <div className="row justify-content-center">
  //       <div className="col-md-4 text-center">
  //         {user ? (
  //           <p>
  //             Welcome{' '}
  //             <em className="text-decoration-underline">{user.email}</em>. You
  //             are logged in!
  //           </p>
  //         ) : (
  //           <p>You are not logged in!</p>
  //         )}
  //         <div className="d-grid gap-2">
  //           <button
  //             type="submit"
  //             className="btn btn-primary pt-3 pb-3"
  //             onClick={(e) => logoutUser(e)}
  //           >
  //             Logout
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Chat;

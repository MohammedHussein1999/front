import Link from 'next/link';

export default function MessagesPage() {
  return (
    <div>
      <h1>Messages</h1>
      {/* رابط يعترض المسار لعرض نافذة منبثقة */}
      <Link href="/messages/1" as="/messages?modal=1">
        Open Message 1
      </Link>
    </div>
  );
}

"use client";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4">
      <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button onClick={() => reset()} className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-2 rounded-full">
        Try again
      </button>
    </div>
  );
}

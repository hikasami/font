// Example usage of Hikasami Sans in Next.js
import { HikasamiSans } from '@hikasami/font/sans';

export default function ExamplePage() {
  return (
    <div className={HikasamiSans.className}>
      <h1 className="text-4xl font-bold">Hikasami Sans</h1>
      <p className="text-lg">A modern, geometric sans-serif typeface</p>
      
      <div className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold">Font Weights</h2>
        <p className="font-light">Light (100-300) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-normal">Regular (400) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-medium">Medium (500) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-semibold">SemiBold (600) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-bold">Bold (700) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-extrabold">ExtraBold (800) - The quick brown fox jumps over the lazy dog</p>
        <p className="font-black">Black (900) - The quick brown fox jumps over the lazy dog</p>
      </div>
    </div>
  );
}

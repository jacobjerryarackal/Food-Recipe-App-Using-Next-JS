import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome to Reciepe App</h1>
      <Link href={'/recipe-list'}>Explore Recipes</Link>
    </div>
  );
}

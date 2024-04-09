import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="wrap">
        <div className="linkText">
          <Link href="/folder">Folder 이동</Link>
          <Link href="/shared">Shared 이동</Link>
          <Link href="/signin">signin 이동</Link>
          <Link href="/signup">signup 이동</Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

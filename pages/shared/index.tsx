import { getUser } from "@/apis/apiShared";
import Footer from "@/components/footer";
import Header from "@/components/header";
import UserTitle from "@/components/shared/userTitle";
import { SharedTypes } from "@/types/shared/type";
import SharedContents from "@/components/shared/sharedContents";
import SearchInput from "@/components/form/searchInput";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchData } from "@/store/store";

export async function getStaticProps() {
  const userData = await getUser();
  return {
    props: {
      userData,
    },
  };
}

export default function Shared({ userData }: { userData: SharedTypes }) {
  const [contents, setContents] = useRecoilState(searchData);
  useEffect(() => {
    setContents(userData.links);
  }, []);
  if (!contents) return null;
  return (
    <>
      <div id="wrap">
        <Header fixed={true} />
        <UserTitle contents={userData} />
        <main>
          <div className="container">
            <SearchInput userData={userData.links} />
            <SharedContents contents={contents} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

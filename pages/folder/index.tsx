import instance from "@/apis/axios";
import FolderButton from "@/components/folder/folderButton";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GetServerSidePropsContext } from "next";
import FolderContents from "@/components/folder/folderContents";
import SearchInput from "@/components/form/searchInput";
import FolderTitle from "@/components/folder/folderTitle";
import AddLink from "@/components/folder/addlink";
import { AllFolder } from "@/types/folder/type";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { searchData } from "@/store/store";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  let id = context.query.folderId ?? "";
  let folderData;
  try {
    const res = await instance.get(
      id ? `/api/users/1/links?folderId=${id}` : `/api/users/1/links`
    );
    folderData = res.data.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      folderData,
    },
  };
}

export default function Folder({ folderData }: { folderData: AllFolder[] }) {
  const [contents, setContents] = useRecoilState(searchData);
  useEffect(() => {
    setContents(folderData);
  }, [folderData]);
  if (!folderData) return null;
  return (
    <>
      <div id="wrap">
        <Header fixed={false} />
        <AddLink />
        <main>
          <div className="container">
            <SearchInput userData={folderData} />
            <FolderButton />
            <FolderContents contents={contents} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

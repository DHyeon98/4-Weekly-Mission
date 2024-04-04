import instance from "@/apis/axios";
import FolderButton from "@/components/folder/folderButton";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GetServerSidePropsContext } from "next";
import FolderContents from "@/components/folder/folderContents";
import SearchInput from "@/components/form/searchInput";
import AddLink from "@/components/folder/addlink";
import { AllFolder } from "@/types/folder/type";
import { useEffect, useState } from "react";

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
  const [contents, setContents] = useState<AllFolder[]>([]);
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
            <SearchInput userData={folderData} setContents={setContents} />
            <FolderButton />
            <FolderContents contents={contents} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

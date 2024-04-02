import instance from "@/apis/axios";
import FolderButton from "@/components/folder/folderButton";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { GetServerSidePropsContext } from "next";
import FolderContents from "@/components/folder/folderContents";
import SearchInput from "@/components/form/searchInput";
import FolderTitle from "@/components/folder/folderTitle";
import AddLink from "@/components/folder/addlink";

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

export default function Folder({ folderData }: any) {
  console.log(folderData);
  return (
    <>
      <div id="wrap">
        <Header fixed={false} />
        <AddLink />
        <main>
          <div className="container">
            <SearchInput userData={folderData} />
            <FolderButton />
            <FolderTitle />
            <FolderContents contents={folderData} />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

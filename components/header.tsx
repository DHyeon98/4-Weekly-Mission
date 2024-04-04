import styled from "styled-components";
import styles from "@/styles/components/header.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchUserData } from "@/apis/apiShared";
import Image from "next/image";

interface Profile {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

interface HeaderProfileProps {
  contents: Profile;
}

const CommonHeader = styled.header<{ fixed: boolean }>`
  position: ${({ fixed }) => (fixed ? "fixed" : "static")};
`;

function HeaderProfile({ contents }: HeaderProfileProps) {
  return (
    <>
      {contents ? (
        <Link className={styles.profileText} href="https://www.naver.com/">
          <Image
            width={28}
            height={28}
            src={contents.profileImageSource}
            alt="프로필 아이콘"
          />
          {contents.email}
        </Link>
      ) : (
        <Link className={styles.login} href="/signin">
          로그인
        </Link>
      )}
    </>
  );
}

export default function Header({ fixed }: { fixed: boolean }) {
  const [contents, setContents] = useState();
  useEffect(() => {
    fetchUserData().then((data) => setContents(data));
  }, []);
  if (!contents) return null;
  return (
    <CommonHeader className={styles.header} fixed={fixed}>
      <div>
        <h1>
          <Link href="/">Linkbrary</Link>
        </h1>
        <HeaderProfile contents={contents} />
      </div>
    </CommonHeader>
  );
}

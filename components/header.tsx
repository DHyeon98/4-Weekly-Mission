import { useRecoilValueLoadable } from "recoil";
import styled from "styled-components";
import { userData } from "@/store/store";
import styles from "@/styles/header.module.css";
import Link from "next/link";

interface HeaderFixedProps {
  fixed: boolean;
}

interface Profile {
  email: string;
  id: number;
  name: string;
  profileImageSource: string;
}

interface HeaderProfileProps {
  contents: Profile;
}

const CommonHeader = styled.header<HeaderFixedProps>`
  position: ${({ fixed }) => (fixed ? "fixed" : "static")};
`;

function HeaderProfile({ contents }: HeaderProfileProps) {
  return (
    <>
      {contents ? (
        <Link className="profileText" href="https://www.naver.com/">
          <img src={contents.profileImageSource} alt="프로필 아이콘" />
          {contents.email}
        </Link>
      ) : (
        <Link className="login" href="/signin">
          로그인
        </Link>
      )}
    </>
  );
}

export default function Header({ fixed }: HeaderFixedProps) {
  const { contents } = useRecoilValueLoadable<HeaderProfileProps>(userData);
  return (
    <CommonHeader className={styles.header} fixed={fixed}>
      <div>
        <h1>
          <Link
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`,
            }}
            href="/"
          >
            Linkbrary
          </Link>
        </h1>
        <HeaderProfile contents={contents} />
      </div>
    </CommonHeader>
  );
}

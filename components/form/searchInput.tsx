import { useSetRecoilState } from "recoil";
import { searchData } from "../../store/store";
import { ChangeEvent, useRef, useState } from "react";
import SearchText from "./searchText";
import { SharedLink } from "@/types/shared/type";
import styles from "@/styles/searchInput.module.css";
import SearchSVG from "@/public/images/Search.svg";
import Image from "next/image";
import ModalEx from "@/pages/modalEx";
import styled from "styled-components";
const Search = styled.input`
  width: 100%;
  padding: 15px 16px 15px 42px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: #f5f5f5;
  font-size: 1.6rem;
  color: rgba(102, 102, 102, 1);

  &::placeholder {
    font-size: 1.6rem;
    color: rgba(102, 102, 102, 1);
  }

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
    padding: 13px 16px 13px 38px;
    &::placeholder {
      font-size: 1.4rem;
    }
  }
`;

function SearchInput({ userData }: { userData: SharedLink[] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const setContents = useSetRecoilState(searchData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(searchText);
    const searchWord = searchText.toLowerCase();
    const filterContents = userData.filter((item: SharedLink) => {
      const url = item.url.toLowerCase();
      const title = item.title ? item.title.toLowerCase() : "";
      const description = item.description
        ? item.description.toLowerCase()
        : "";
      return (
        url.includes(searchWord) ||
        (title && title.includes(searchWord)) ||
        (description && description.includes(searchWord))
      );
    });
    setContents((prevContents) => ({
      ...prevContents,
      links: filterContents,
    }));
  };

  const handleText = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleDelete = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      setSearchText("");
    }
  };
  return (
    <>
      <form
        className={styles.searchForm}
        onSubmit={(event) => handleSubmit(event)}
      >
        <label htmlFor="search">
          <SearchSVG alt="검색 아이콘" />
        </label>
        <input
          ref={inputRef}
          className={styles.searchInput}
          id="search"
          placeholder="링크를 검색해 보세요."
          onChange={(event) => handleText(event)}
        />
        {searchText ? (
          <button
            className={styles.searchDeleteBtn}
            type="button"
            onClick={handleDelete}
          >
            <Image fill src={`/images/close.png`} alt="검색어 삭제" />
          </button>
        ) : null}
      </form>
      {searchValue ? <SearchText searchValues={searchValue} /> : null}
      <ModalEx />
    </>
  );
}

export default SearchInput;

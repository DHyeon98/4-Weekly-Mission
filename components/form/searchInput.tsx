import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from "react";
import SearchText from "./searchText";
import { SharedLink } from "@/types/shared/type";
import styles from "@/styles/searchInput.module.css";
import SearchSVG from "@/public/images/Search.svg";
import Image from "next/image";
import ModalEx from "@/pages/modalEx";
import { AllFolder } from "@/types/folder/type";
type PropsType = SharedLink[] | AllFolder[];
interface Props {
  userData: PropsType;
  setContents: Dispatch<SetStateAction<PropsType>>;
}

export default function SearchInput({ userData, setContents }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchText, setSearchText] = useState("");
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchValue(searchText);
    const searchWord = searchText.toLowerCase();
    const filterContents = userData.filter((item: SharedLink | AllFolder) => {
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
    console.log(filterContents);
    setContents(filterContents);
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

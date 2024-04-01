import styles from "@/styles/searchText.module.css";

export default function SearchText({ searchValues }: { searchValues: string }) {
  return (
    <>
      {searchValues ? (
        <div className={styles.searchTextBox}>
          <p>
            <strong>{searchValues}</strong>으로 검색한 결과입니다.
          </p>
        </div>
      ) : null}
    </>
  );
}

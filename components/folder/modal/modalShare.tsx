import ModalPortal from "@/components/modal";
import styles from "@/styles/folder/modal/modal.module.css";
import CloseSVG from "@/public/images/close.svg";
import { Dispatch, SetStateAction, useEffect } from "react";
import Image from "next/image";
export default function ModalShare({
  modalText,
  isOpen,
  setModalName,
}: {
  modalText: string | string[];
  isOpen: boolean;
  setModalName: Dispatch<SetStateAction<boolean | string>>;
}) {
  const resultUrl = window.location.href;
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(resultUrl);
      alert("클립보드에 링크가 복사되었어요.");
    } catch (error) {
      console.log(error);
    }
  };

  const handleShareToFacebook = () => {
    window.open(`http://www.facebook.com/sharer/sharer.php?u=${resultUrl}`);
  };

  useEffect(() => {
    const { Kakao } = window;
    Kakao.cleanup();
    Kakao.init(process.env.NEXT_PUBLIC_KAKAO_ID_KEY);
  }, []);
  const shareKakao = () => {
    const { Kakao, location } = window;
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "Linkbrary",
        description: "세상의 모든 정보를 쉽게 저장하고 관리해 보세요",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/857e/092f/86faf2c5a590aad01435db3ce63a6664?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h-Mmk4pr286-1hogF3C86~RvXj-Qdms4PKWdTsTEOkWcJcvLBYaTd~Z5ZJJHg~B1nT7w3PjrTnhP~pCmhSpKzhim1Fm2po1RB5kGRAXYHxZNRGLWuLOw-TCBHEH2HmyoXMwPo-plAmBAzS4zd8Sp9zbTGbuWVaoX9ogux5RDHVofYsU~RWJwl4r-P-fnf5lS85MiaEpLnn2GkGLOY1WXHipCxjsiamDFp0QILkAh0sLrLpYBqhMP3ap~O-BUG4fJsY6EsGn7NiJxBsMbq7Mx2NXhRpga9P2rfw7vTIPTrTxbsUCwVr4jcfwPRAkCnHhzvD0B7VQYUBTNYRVZoYqiXg__",
        link: {
          webUrl: location.href,
        },
      },
    });
  };
  const handelClose = () => {
    setModalName(false);
  };
  return (
    <ModalPortal isOpen={isOpen}>
      <div className={styles.modalCon}>
        <div className={styles.modalBox}>
          <h4>폴더 공유</h4>
          <button className={styles.deleteModal} onClick={handelClose}>
            <CloseSVG alt="닫기 버튼" />
          </button>
          <p className={styles.modalText}>{modalText}</p>
          <ul className={styles.shareContainer}>
            <li>
              <button
                onClick={() => {
                  shareKakao();
                }}
              >
                <Image
                  width={42}
                  height={42}
                  src={`/images/kakaoShare.png`}
                  alt="카카오톡으로 공유"
                />
                <span>카카오톡</span>
              </button>
            </li>
            <li>
              <button onClick={handleShareToFacebook}>
                <Image
                  width={42}
                  height={42}
                  src={`/images/facebookShare.png`}
                  alt="페이스북으로 공유"
                />
                <span>페이스북</span>
              </button>
            </li>
            <li>
              <button onClick={handleCopyClipBoard}>
                <Image
                  width={42}
                  height={42}
                  src={`/images/linkShare.png`}
                  alt="링크 복사"
                />
                <span>링크 복사</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </ModalPortal>
  );
}

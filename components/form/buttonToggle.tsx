import Image from "next/image";

interface Props {
  buttonToggle: boolean;
  setButtonToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function ButtonToggle({ buttonToggle, setButtonToggle }: Props) {
  const handleButtonToggle = () => {
    setButtonToggle(!buttonToggle);
  };
  return (
    <button type="button" onClick={handleButtonToggle}>
      {buttonToggle ? (
        <Image
          fill
          sizes="width: 16px"
          src={"/images/eyeOff.png"}
          alt="비밀번호 가리기"
        />
      ) : (
        <Image
          fill
          sizes="width: 16px"
          src={"/images/eyeOn.png"}
          alt="비밀번호 보이기"
        />
      )}
    </button>
  );
}

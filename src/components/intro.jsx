import { MdInvertColors } from "react-icons/md";
import { CONTRACT_ADDRESS } from "./web3.config";

const ranNum = Math.floor(Math.random() * 27) + 1;
const imgSrc = `${process.env.REACT_APP_IMAGE_URL}/${ranNum}.png`;

const Intro = ({ totalNft, mintedNft, myNft }) => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-indigo-300 text-9xl truncate opacity-40">
          Color-Chip
        </div>
        <div className="relative">
          <img
            className="absolute w-40 h-40 rounded-full"
            src={imgSrc}
            alt="NFT"
          />
          <div className="top-0 w-40 h-40 rounded-full bg-white text-gray-950 flex justify-center items-center">
            Loading...
          </div>
        </div>
        <div className="mt-4 text-2xl font-bold flex items-center">
          Color-Chip
          <div className="bg-main w-6 h-6 rounded-full flex justify-center items-center ml-4 text-white">
            <MdInvertColors size={16} />
          </div>
        </div>
        <div className="mt-10 flex items-center text-gray-300">
          by
          <div className="text-main ml-2">{CONTRACT_ADDRESS}</div>
        </div>
        <div className="mt-2 text-gray-300">
          Color-chip은 카지노에서, 플레이어를 구별하기 위해 사용하는, 다양한
          색의 칩. 룰렛이나 다이사이 따위의 게임에 주로 사용하며, 룰렛의 경우
          테이블에 일곱 가지 색의 칩을 배열해 놓고 게임을 한다. 카지노별로
          금액이 정해져 있으며 현금으로 교환할 수 없다.
        </div>
        <div className="py-4 text-center flex">
          <div>
            <div className="font-bold">{totalNft}</div>
            <div className="text-gray-300">총 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{mintedNft}</div>
            <div className="text-gray-300">발행된 NFT</div>
          </div>
          <div className="ml-4">
            <div className="font-bold">{myNft}</div>
            <div className="text-gray-300">내 NFT</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;

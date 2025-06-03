import { FaRegCopyright } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#0f323f] p-2 text-center flex justify-around items-center bg-[url('https://tympanus.net/Development/ImageExpansionTypography/img/noise.png')]">
      <div className="flex justify-around items-center gap-2">
        <FaRegCopyright size={15} color="white" />
        <p className="block sm:hidden text-white">VJDQ</p>
        <p className="hidden sm:block text-white">
          VJ Data Questers All Rights Reserved
        </p>
      </div>

      <div className="flex flex-row items-center">
        <a
          href="https://www.linkedin.com/company/vj-data-questers/"
          target="_blank"
          rel="noreferrer"
          className="w-8 mx-1"
        >
          <img
            src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000"
            alt=""
          />
        </a>
        <a
          href="https://www.instagram.com/vjdataquesters.club/"
          target="_blank"
          rel="noreferrer"
          className="w-8 mx-1"
        >
          <img
            src="https://img.icons8.com/?size=100&id=Xy10Jcu1L2Su&format=png&color=000000"
            alt=""
          />
        </a>
        <a
          href="mailto:vjdataquesters@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="w-8 mx-1"
        >
          <img
            src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

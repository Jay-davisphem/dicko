import { GiSpeaker } from "react-icons/gi";
import Loading from "./Loading.jsx";
const DisplayDict = ({ dat, setSearch, searchDict }) => {
  const playAudio = () => {
    const aud = document.getElementById("aud");
    console.log(aud);
    aud.play();
  };
  const data = dat[0];
  console.log(data.phonetics[0].audio);
  let i = 0;
  return (
    <div className="p-8 md:p-16 md:w-4/5 md:m-lg min-h-screen bg-sec-col text-xl">
      <div className="font-bold">{data.word}</div>
      <div className="flex my-2 content-center">
        <span className="mr-4">{data.phonetic}</span>

        <button onClick={playAudio} className="hover:border hover:rounded-full">
          <GiSpeaker size={25} />
        </button>
        <audio id="aud" src={data.phonetics[0].audio}></audio>
      </div>

      <div>
        <b>Origin</b>: {data.origin}
      </div>
      <div className="text-lg inline">
        {data.meanings.map(({ partOfSpeech, definitions }) => {
          return (
            <>
              <div className="font-black text-xl mt-8">
                Meaning {++i}: <div className="font-bold">{partOfSpeech}</div>
              </div>
              <div>
                <b>Definitions</b>: {definitions[0].definition}
              </div>
              <div>
                <b>Use</b>: {definitions[0].example}
              </div>

              {definitions[0].synonyms[0] && (
                <div>
                  <ul className="flex flex-wrap">
                    <b>Synonyms</b>:
                    {definitions[0].synonyms.map((li) => {
                      return (
                        <li
                          onClick={() => {
                            searchDict(li);
                            setSearch(li);
                          }}
                          className="cursor-pointer hover:bg-txt-col mx-2 bg-ter-col text-sec-col mb-2 rounded-full p-1"
                        >
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              {definitions[0].antonyms[0] && (
                <div>
                  <ul className="flex flex-wrap">
                    <b>Antonyms</b>:
                    {definitions[0].antonyms.map((li) => {
                      return (
                        <li
                          onClick={() => {
                            searchDict(li);
                            setSearch(li);
                          }}
                          className="hover:bg-txt-col cursor-pointer mx-2 bg-ter-col text-sec-col mb-2 rounded-full p-1"
                        >
                          {li}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <div></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default DisplayDict;

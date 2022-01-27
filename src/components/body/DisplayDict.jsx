import dat from "./data.json";
const DisplayDict = () => {
  console.log(dat);
  const data = dat[0];
  return (
    <div className="flex-col md:w-4/5 m-lg bg-sec-col text-xl">
      <div>{data.word}</div>
      <div>
        <span>{data.phonetic}</span>
        <span className="md:ml-4">
          <a href={data.phonetics.audio}>aud</a>
        </span>
      </div>

      <div>{data.origin}</div>
      <div className="text-lg inline">
        {data.meanings.map(({ partOfSpeech, definitions }) => {
          return (
            <>
              <div>{partOfSpeech}</div>
              <div>Definitions: {definitions[0].definition}</div>
              <div>Use: {definitions[0].example}</div>
              <div>
                <ul className="flex flex-wrap">
                  Synonyms:
                  {definitions[0].synonyms.map((li) => (
                    <li className="mx-2">{li}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="flex flex-wrap">
                  Antonyms:
                  {definitions[0].antonyms.map((li) => (
                    <li className="mx-2">{li}</li>
                  ))}
                </ul>
              </div>
              <div></div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default DisplayDict;

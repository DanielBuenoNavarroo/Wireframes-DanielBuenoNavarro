type RoadMapItemProps = {
  title: string;
  content: string[];
};

const RoadMapItem = ({ title, content }: RoadMapItemProps) => {
  return (
    <>
      <div className={"flex items-center"}>
        {/* Circle */}
        <div
          className={
            "size-10 min-h-10 min-w-10 rounded-full bg-gradient-to-b from-orange-600 via-orange-600 via-40% to-blue-500 p-1.5 relative"
          }
        >
          <div className={"size-full rounded-full bg-neutral-800"} />
        </div>
        {/* Bar */}
        <div
          className={
            "w-4 sm:w-8 md:w-16 lg:w-20 h-1 bg-gradient-to-r from-orange-400/50 to-orange-400/5 rounded-sm"
          }
        />
        {/* Title */}
        <div className="w-fit text-center sm:text-start sm:px-5 py-3 bg-neutral-900 text-orange-400 font-semibold text-3xl rounded-xl shadow-RoadMapTitle sour-gummy-custom">
          {title}
        </div>
      </div>
      {/* Content */}
      <div className="ml-14 sm:ml-20 md:ml-28">
        <ul
          className={
            "w-full max-w-screen-lg px-10 py-6 mb-8 bg-neutral-900/40 rounded-xl shadow-RoadMapContent text-gray-400 text-md font-semibold space-y-4"
          }
        >
          {content.map((item, index) => (
            <li key={index} className={"list-disc ml-4 pl-2"}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default RoadMapItem;

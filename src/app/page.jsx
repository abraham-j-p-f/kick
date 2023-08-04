function VideoRecomended() {
  return (
    <div className="aspect-video bg-kick-gray-25 rounded hover:scale-[1.01] transition-all"></div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col flex-1 h-full pb-5">
      <div className="rounded-[5px] overflow-y-auto no-scroll pl-0 pt-0 md:pl-3 md:pt-3">
        <div className="space-y-3">
          <div>
            <h1 className="text-[26.66px] font-bold">
              Streams <span className="text-kick-green">destacados</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 mpd:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
            <VideoRecomended />
          </div>
        </div>
      </div>
    </div>
  );
}

type AudioPlayerProps = {
  title: string;
  artistName: string;
  audioUrl: string;
};

export default function AudioPlayer({
  title,
  artistName,
  audioUrl,
}: AudioPlayerProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-gray-900 p-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mb-3 text-sm text-gray-400">{artistName}</p>

      <audio controls className="w-full">
        <source src={audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
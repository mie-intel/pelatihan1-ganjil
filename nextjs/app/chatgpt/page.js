export default function Page() {
  return (
    <div className="w-full flex flex-col justify-between items-center h-screen bg-gradient-to-t from-[#c2c2c2] to-[#FFFFFF]">
      <div className="w-full flex flex-row justify-between p-2">
        <h1 className="font-[bold] text-[25px]">Chat GPT</h1>
        <img alt="gambar" src="/image.png" width={50} height={50} />
      </div>
      <div className="w-full flex flex-col items-center">
        <h1 className="font-[bold] text-[50px]">New Chat</h1>
        <div className="w-[500px] h-[100px] bg-[#8B8B8B] max-lg:hidden rounded-full"></div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <div className="w-[500px] h-[100px] bg-[#8B8B8B] lg:hidden rounded-full"></div>
      </div>
    </div>
  );
}

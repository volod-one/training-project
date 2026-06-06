function QrCard() {
  return (
    <article className="bg-white rounded-[20px] p-4 max-w-[320px] w-full">
      <img
        src={`${import.meta.env.BASE_URL}images/image-qr-code.png`}
        alt="QR code to visit Frontend Mentor"
        className="w-full aspect-square rounded-[10px] block"
      />
      <div className="flex flex-col gap-4 px-2 pt-6 pb-4 text-center">
        <h1 className="text-[1.375rem] font-bold leading-[1.2] text-slate-900">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-[0.9375rem] font-normal leading-[1.5] text-slate-500">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </article>
  )
}

export default QrCard

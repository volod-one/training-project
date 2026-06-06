import './QrCard.css'

function QrCard() {
  return (
    <article className="card">
      <img
        src="/images/image-qr-code.png"
        alt="QR code to visit Frontend Mentor"
        className="card__image"
      />
      <div className="card__body">
        <h1 className="card__title">Improve your front-end skills by building projects</h1>
        <p className="card__text">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
        </p>
      </div>
    </article>
  )
}

export default QrCard

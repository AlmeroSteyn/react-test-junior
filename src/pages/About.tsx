import { Link } from 'react-router-dom'

export function About() {
  return (
    <section
      className="mx-auto my-8 flex max-w-xl flex-col items-center justify-center
        p-8 text-offroad-text"
    >
      <h1 className="mb-4 text-3xl font-medium">
        About Offroad Package Delivery
      </h1>
      <p className="mb-6 text-base leading-relaxed">
        You are stuck in the jungle and you need new stationary, or you are in
        the desert and you need new shoes.
      </p>
      <p className="mb-6 text-base leading-relaxed">
        Normally you'd be in..... TROUBLE!!!!
      </p>
      <p className="mb-6 text-base leading-relaxed">
        But fear not, Offroad Package Delivery is here to save the day!
      </p>
      <Link
        to="/"
        className="font-medium text-offroad-primary underline
          hover:no-underline"
      >
        Back to Home
      </Link>
    </section>
  )
}

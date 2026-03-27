export default function CTASection() {
  return (
    <div className="rounded-2xl bg-navy-900 p-8 text-center">
      <h2 className="mb-2 text-2xl font-bold text-white">
        Want to discuss your results?
      </h2>
      <p className="mx-auto mb-6 max-w-lg text-base text-navy-200">
        We help regulated utilities build a consistent operating model for external data sharing. A short conversation can help map these findings to your specific setup.
      </p>
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href="https://harbr.com/contact"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-white px-8 py-3 text-base font-semibold text-navy-900 transition-colors hover:bg-navy-50"
        >
          Book a conversation
        </a>
        <a
          href="https://harbr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-navy-600 px-8 py-3 text-base font-semibold text-navy-200 transition-colors hover:border-navy-400 hover:text-white"
        >
          Learn more about Harbr
        </a>
      </div>
    </div>
  )
}

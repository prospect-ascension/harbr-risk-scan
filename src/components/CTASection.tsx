export default function CTASection() {
  return (
    <div className="rounded-2xl bg-navy-900 p-10 text-center">
      <h2 className="mb-3 text-3xl font-bold text-white">
        Want to discuss your results?
      </h2>
      <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-navy-200">
        We help regulated utilities build a consistent operating model for external data sharing. A short conversation can help map these findings to your specific setup.
      </p>
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="https://www.harbrdata.com/demo"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-harbr-blue px-10 py-3.5 text-base font-semibold text-white shadow-lg shadow-harbr-blue/25 transition-all hover:bg-blue-600 hover:shadow-xl"
        >
          Book a conversation
        </a>
        <a
          href="https://www.harbrdata.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border-2 border-navy-500 px-10 py-3.5 text-base font-semibold text-navy-200 transition-all hover:border-harbr-blue hover:text-white"
        >
          Learn more about Harbr
        </a>
      </div>
    </div>
  )
}

// Menyisipkan structured data (JSON-LD). Tidak menghasilkan elemen visual.
export default function JsonLd({ data }: { data: object | object[] }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c"); // cegah "</script>" di dalam data
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

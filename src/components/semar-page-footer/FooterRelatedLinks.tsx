const footerRelatedLinks = [
  {
    href: '/',
    linkText: 'LAPOR',
  },
  {
    href: '/',
    linkText: 'MENPAN',
  },
  {
    href: '/',
    linkText: 'LHKPN',
  },
  {
    href: '/',
    linkText: 'BATAN',
  },
  {
    href: '/',
    linkText: 'BIG',
  },
  {
    href: '/',
    linkText: 'BPPT',
  },
  {
    href: '/',
    linkText: 'BMKG',
  },
  {
    href: '/',
    linkText: 'RISTEK/BRIN',
  },
  {
    href: '/',
    linkText: 'BNPB',
  },
  {
    href: '/',
    linkText: 'LIPI',
  },
  {
    href: '/',
    linkText: 'BKN',
  },
  {
    href: '/',
    linkText: 'SETNEG',
  },
];

export default function FooterRelatedLinks() {
  return (
    <>
      {footerRelatedLinks.map((footerRelatedLink) => (
        <li key={footerRelatedLink.linkText}>
          <a
            href={footerRelatedLink.href}
            className="underline transition duration-300 focus:outline-none focus:ring focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-sky-100"
          >
            {footerRelatedLink.linkText}
          </a>
        </li>
      ))}
    </>
  );
}

const SEO = ({ title, description, keywords, name, type, url, image }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url} />
    </>
  );
};

SEO.defaultProps = {
  title: 'Mohit Verma | React Developer and MERN Stack Developer',
  description:
    'Mohit Verma is a React developer with hands-on MERN stack experience building polished interfaces, scalable products, and modern web applications.',
  keywords:
    'Mohit Verma, React Developer, MERN Stack Developer, Frontend Developer, JavaScript, Tailwind CSS, Portfolio',
  name: 'Mohit Verma',
  type: 'website',
  url: 'https://vermamohit.in/',
  image: 'https://vermamohit.in/og-preview.svg',
};

export default SEO;

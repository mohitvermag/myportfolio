const SEO = ({ title, description, keywords, name, type, url, image }) => {
    return (
        <>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property='og:type' content={type} />
            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:url' content={url} />
            <meta property='og:image' content={image} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name='twitter:creator' content={name} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:title' content={title} />
            <meta name='twitter:description' content={description} />
            <meta name='twitter:image' content={image} />
            {/* End Twitter tags */}

            <link rel="canonical" href={url} />
        </>
    );
};

SEO.defaultProps = {
    title: 'Mohit Verma | Frontend & MERN Stack Developer in India',
    description: 'Mohit Verma is a professional Frontend and MERN Stack Developer specializing in scalable web applications, React.js, and modern UI/UX design.',
    keywords: 'Mohit Verma, Mohit, Mohit MERN Stack Developer, Mohit Frontend Developer, React Developer, Web Developer India, Portfolio',
    name: 'Mohit Verma',
    type: 'website',
    url: 'https://mohitvermag.github.io/',
    image: 'https://mohitvermag.github.io/preview.png' // Ensure you have a preview image in public folder
};

export default SEO;

import React, { useState } from 'react';

const Card = ({ title, description, url, logo, isHovered, setIsHovered }) => {
    return (
        <div 
            style={isHovered ? { ...styles.card, ...styles.cardHover } : styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

        >   { Boolean(logo) && <img 
            src={logo || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='} 
            alt={title} 
            style={styles.logo} 
            /> 
             }
            
            <h2 style={styles.title}>
                {title || 'No Title'}
            </h2>
            <p style={styles.description}>
                {description || 'No Description Available'}
            </p>
            <a
                href={url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
            >
                Learn More
            </a>
        </div>
    );
};

const KenjimCardList = ({ data }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={styles.KenjimCardList}>
            {data.map((item, index) => (
                <Card
                    key={index}
                    title={item.title}
                    description={item.description}
                    url={item.url}
                    logo={item.logo}
                    isHovered={hoveredIndex === index}
                    setIsHovered={(isHovered) => setHoveredIndex(isHovered ? index : null)}
                />
            ))}
        </div>
    );
};

const styles = {
    KenjimCardList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center', 
    },
    card: {
        border: '1px solid rgba(255, 255, 255, 0.3)', 
        borderRadius: '8px',
        padding: '16px',
        width: '300px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        backdropFilter: 'blur(10px)',
        background: 'linear-gradient(180deg, #FF7704, #FFF)', 
        backgroundClip: 'padding-box',
        fontFamily: "'Courier', Courier, monospace",
        fontSize: '15px', 
    },
    logo: {
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        borderRadius: '50%',
        marginBottom: '16px',
    },
    title: {
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '0.5em 0',
        color: '#2c3e50',
    },
    description: {
        fontSize: '1em',
        color: '#34495e', 
        marginBottom: '1em',
        textAlign: 'justify', 
    },
    link: {
        fontSize: '1em',
        color: '#2980b9',
        textDecoration: 'none',
        fontWeight: 'bold',
    },
    cardHover: {
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease',
    },
};

const KenjimPoako = () => {
    const data = [
        {
            title: 'React',
            description:
                'React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless". It is maintained by Meta and a community of individual developers and companies.',
            url: 'https://react.dev/',
            logo: 'https://reactjs.org/favicon.ico',
        },
        {
            title: 'Material-UI',
            description:
                'Material-UI is an open-source project that features React components that implement Google’s Material Design. It is maintained by the company Call-Em-All and other individual contributors.',
            url: 'https://v4.mui.com/',
            logo: '', 
        },
    ];

    return <KenjimCardList data={data} />;
};

export default KenjimPoako;
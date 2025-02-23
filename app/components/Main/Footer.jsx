import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

const styles = {
    footer: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        textAlign: 'center',
        padding: '10px 0',
    },
};

export default Footer;
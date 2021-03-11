import React from 'react';

const NoMatch = () => {
    const invalidStyle = { backgroundColor: 'yellow',
    height: '100vh',
    paddingTop: '0',
    padding: '0',
    margin: 'auto'
    }
    return (
        <div style={invalidStyle}>
            <h1 style={{ color: 'red' }}>Invaild URL</h1>
        </div>
    );
};

export default NoMatch;
import React from 'react';

const NoMatch = () => {
    const invalidStyle = { backgroundColor: 'yellow',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
    }
    return (
        <div style={invalidStyle}>
            <h1 style={{ color: 'red' }}>Invaild URL</h1>
        </div>
    );
};

export default NoMatch;
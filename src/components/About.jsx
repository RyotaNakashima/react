import React from 'react';

function About (props) {
    const { match } = props;
    console.log(match);
    console.log(match.params.id,'idは？');
    return(
        <h1>アバウトページです！</h1>
    );
}

export default About;
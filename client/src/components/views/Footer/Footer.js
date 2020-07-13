import React from 'react'
import StickyFooter from 'react-sticky-footer';

function Footer() {
    return (
        <StickyFooter
    bottomThreshold={50}
    normalStyles={{
    backgroundColor: "#FF4F00",
    padding: "2rem"
    }}
    stickyStyles={{
    backgroundColor: "rgba(255,255,255,.8)",
    padding: "2rem"
    }}
>

    <div style={{
        justifyContent: 'center', 
        alignItems: 'center',
        display: 'flex' }}>
            <h2>Cornerstock © 2020 </h2>
        </div>
</StickyFooter>
    )
}

export default Footer

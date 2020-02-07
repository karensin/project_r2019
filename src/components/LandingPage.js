import React from 'react'

export default function LandingPage() {
    return (
        <div>
            <div className="landing Aligner" style={{
                background: `url("${process.env.PUBLIC_URL + '/imgs/landing.png'}") no-repeat center / cover `
            }}>
                <p className="Aligner-item " >
                    Saving one pet won’t change the world,
                    </p>  <p className="Aligner-item right" >
                    but for that one pet the world will change forever...
                      </p>
            </div>
        </div>
    )
}

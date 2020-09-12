import React from 'react'
import { Container } from 'react-bootstrap/'


export default function LandingPage() {
    return (
        <hero>
            <Container className="landing Aligner position-relative overflow-hidden text-center bg-light " style={{
                background: `url("${process.env.PUBLIC_URL + '/imgs/landing.png'}") no-repeat center / cover `
            }}>
                <p className="Aligner-item col-md-8 col-lg-7"  >
                    Saving one pet won’t change the world,
                    </p>  <p className="Aligner-item right row justify-content-center align-items-cente col-md-8" >
                    but for that one pet the world will change forever...
                </p>
            </Container>
        </hero >
    )
}

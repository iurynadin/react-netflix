import React from 'react'

import { HeaderContainer } from "../containers/header";
import { Feature, OptForm } from "../components";
import { JumbotronContainer } from "../containers/jumbotron";
import { FaqsContainer } from "../containers/faq";
import { FooterContainer } from "../containers/footer";


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it Now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to createyour membership</OptForm.Text>
                    </OptForm>
                    
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
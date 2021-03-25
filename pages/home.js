import React from "react"
import { OptForm, Feature } from "../components"
import { JumbotronContainer } from "../containers/jumbotron"
import { FooterContainer } from "../containers/footer"
import { FaqsContainer } from "../containers/faqs"
import { HeaderContainer } from "../containers/header"
import * as ROUTES from "../constants/routes"

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV Programs and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email Address"/>
                        <OptForm.ButtonLink to={ROUTES.SIGN_UP}>Try it now</OptForm.ButtonLink>
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
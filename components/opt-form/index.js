import React from "react"
import { Container, Input, ButtonLink, Text } from "./styles/opt-form"

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />
}

OptForm.ButtonLink = function OptFormButtonLink({ children, ...restProps }) {
    return (
        <ButtonLink {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </ButtonLink>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps}) {
    return <Text {...restProps}>{children}</Text>
}
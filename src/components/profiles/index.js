import React from "react" 
import {Container, Title, List, Items, Picture, Name} from "./styles/profiles"

export default function Profiles({children, ...props}) {
    return (
        <Container {...props}>{children}</Container>
    )
}

Profiles.Title = function ProfilesTitle({children, ...props}) {
    return <Title {...props}>{children}</Title>
}

Profiles.List = function ProfilesList({children, ...props}) {
    return <List {...props}>{children}</List>
}

Profiles.User = function ProfileUser({children, ...props}) {
    return <Items {...props}>{children}</Items>
}

Profiles.Picture = function ProfilePicture({src,...props}) {
    return <Picture {...props} src={src? `/images/users/${src}.png` : "/images/misc/loading.gif"} />
}

Profiles.Name = function ProfilesName({children, ...props}) {
    return <Name {...props}>{children}</Name>
}
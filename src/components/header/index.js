import React, {useState} from "react"
import {Link as RouterReach} from "react-router-dom"
import {Background, 
        ButtonLink, 
        Group, Link, 
        Container, 
        Logo,
        Text,
        Feature,
        FeatureCallout,
        PlayButton,
        Profile,
        Picture,
        DropDown,
        Search,
        SearchIcon,
        SearchInput
    } from "./styles/header"

export default function Header({bg=true, children, ...props}) {
    return (
        bg ? <Background {...props} >{children}</Background> : children
    )
}

Header.Frame = function HeaderFrame({children, ...props}){
    return (
        <Container {...props}>{children}</Container>
    )
}

Header.Logo = function HeaderLogo({to, children, ...props}) {
    return (
        <RouterReach to={to}>
            <Logo>
                {children}
            </Logo>
        </RouterReach>
    )
}

Header.Feature = function HeaderFeature({children, ...props}) {
    return <Feature {...props}>{children}</Feature>
}

Header.FeatureCallout = function HeaderFeatureCallout({children, ...props}) {
    return <FeatureCallout {...props}>{children}</FeatureCallout>
}

Header.PlayButton = function HeaderPlayButton({children, ...props}) {
    return <PlayButton {...props}>{children}</PlayButton>
}

Header.Button = function HeaderButton({children, ...props}) {
    return (
        <ButtonLink {...props}>{children}</ButtonLink>
    )
}

Header.Text = function HeaderText({children, ...props}) {
    return <Text {...props}>{children}</Text>
}

Header.Group = function HeaderGroup({children, ...props}) {
    return <Group {...props}>{children}</Group>
}

Header.Link = function HeaderLink({children, ...props}) {
    return <Link {...props}>{children}</Link>
}

Header.Picture = function HeaderPicture({src, ...props}) {
    return <Picture src={`images/users/${src}.png`} {...props} />
}

Header.Profile = function HeaderProfile({children, ...props}) {
    return <Profile {...props}>{children}</Profile>
}

Header.DropDown = function HeaderDropDown({children, ...props}) {
    return <DropDown {...props}>{children}</DropDown>
}

Header.Search = function HeaderSearch({searchItem, setSearchItem,...props}) {
    const [searchActive, setSearchActive] = useState(false)
    return <Search {...props}>
        <SearchIcon onClick={() => setSearchActive(!searchActive)}>
            <img src="images/icons/search.png" alt="search" />
        </SearchIcon>
        <SearchInput 
            placeholder="Search movies and series"
            value={searchItem} 
            onChange={({target})=>setSearchItem(target.value)}
            active={searchActive}
        />
    </Search>
}
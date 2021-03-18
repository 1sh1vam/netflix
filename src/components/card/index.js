import React, {useState, useContext, createContext} from "react"
import {
    Container,
    Group,
    Title,
    Entities,
    Item,
    Meta,
    SubTitle,
    Text,
    Image,
    Feature,
    Content,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity
} from "./styles/card"

const FeatureContext = createContext()

export default function Card({children, ...props}) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({})
    return (
        <FeatureContext.Provider 
        value={{showFeature, setShowFeature, 
        itemFeature, setItemFeature}}>
            <Container {...props}>{children}</Container>
        </FeatureContext.Provider>
    )
    
}

Card.Group = function CardGroup({children, ...props}) {
    return <Group {...props}>{children}</Group>
}

Card.Title = function CardTitle({children, ...props}) {
    return <Title {...props}>{children}</Title>
}

Card.Entities = function CardEntities({children, ...props}) {
    return <Entities {...props}>{children}</Entities>
}

Card.Item = function CardItem({children, item, ...props}) {
    const {setShowFeature, setItemFeature} = useContext(FeatureContext)
    return <Item 
            onClick={()=>{
                setShowFeature(true)
                setItemFeature(item)
            }}
            >
            {children}</Item>
}

Card.Image = function CardImage({...props}) {
    return <Image {...props} />
}

Card.Meta = function CardMeta({children, ...props}) {
    return <Meta {...props}>
        {children}
    </Meta>
}

Card.SubTitle = function CardSubTitle({children, ...props}) {
    return <SubTitle {...props}>{children}</SubTitle>
}

Card.Text = function CardText({children, ...props}){
    return <Text {...props}>{children}</Text>
}

Card.Feature = function CardFeature({children, category, ...props}) {
    const {showFeature, setShowFeature, itemFeature} = useContext(FeatureContext)
    return showFeature ? (
         <Feature {...props}
            src={`images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}
         >
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={()=>setShowFeature(false)}>
                    <img src="images/icons/close.png" alt="close" />
                </FeatureClose>

                <Group margin="30px 0" flexDirection="row" alignItems="center"> 
                    <Maturity rating={itemFeature.maturity}>
                        {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                {children}
            </Content>
        </Feature>
    ): null
}
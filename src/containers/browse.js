import React, { useState, useContext, useEffect } from "react"
import { Header, Profiles, Loading, Card, Player } from "../components"
import { FireBaseContext } from "../context/firebase"
import { FooterContainer } from "./footer"
import { SelectProfileContainer } from "./profiles"
import Fuse from "fuse.js"
import { useAuthListener } from "../hooks"

export function BrowseContainer({slides}) {
    const [category, setCategory] = useState("series")
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const [searchItem, setSearchItem] = useState('')
    const [slideRows, setSlideRows] = useState([])

    const {firebase} = useContext(FireBaseContext)

    const {user} = useAuthListener()

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [user])

    useEffect(()=>{
        setSlideRows(slides[category])
    }, [slides, category])

    useEffect(() => {
        const fuse = new Fuse(slideRows, {keys: ['data.description', 'data.title', 'data.genre']});
        const result = fuse.search(searchItem).map(({item}) => item);
        
        if(slideRows.length > 0 && searchItem.length > 3 && result.length > 0) {
            setSlideRows(result)
        }
        else{
            setSlideRows(slides[category])
        }
    }, [searchItem])

    return profile.displayName ? (
        <>
            {loading? <Loading src={user.photoURL} /> : <Loading.ReleseBody />}
            <Header src="joker1" browse={true}>
                <Header.Frame>
                    <Header.Group>
                        <Header.Logo to="/" src="/images/misc/logo.svg">
                            <svg viewBox="0 0 111 30" focusable="false"><g id="netflix-logo"><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path></g></svg>
                        </Header.Logo>

                        <Header.Link
                            active={category==="series"? true: false}
                            onClick={()=>setCategory("series")}
                        >
                            Series
                        </Header.Link>
                        <Header.Link
                            active={category==="films"? true: false}
                            onClick={()=>setCategory("films")}
                        >
                            Movies
                        </Header.Link>
                    </Header.Group>

                    <Header.Group>
                        <Header.Search searchItem={searchItem} setSearchItem={setSearchItem} />
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.DropDown>   
                                <Header.Group>
                                    <Profiles.Picture src={user.photoURL} />
                                    <Profiles.Name>{user.displayName}</Profiles.Name>
                                </Header.Group>
                                <Header.Group>
                                    <Header.Link onClick={() => firebase.auth().signOut()}>
                                        Sign Out
                                    </Header.Link>
                                </Header.Group>
                                
                            </Header.DropDown>
                        </Header.Profile>
                    </Header.Group>
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallout>Watch Joker Now</Header.FeatureCallout>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a
                        futile attempt to feel like he's part of the world around him.
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>

            <Card.Group>
                {slideRows.map(row => (
                    <Card key={`${category}-${row.title.toLowerCase()}`}>
                    <Card.Title>{row.title}</Card.Title>
                    <Card.Entities>
                        {row.data.map(item => (
                            <Card.Item item={item} key={item.id}>
                                <Card.Image src={`images/${category}/${item.genre}/${item.slug}/small.jpg`} />
                                <Card.Meta>
                                    <Card.SubTitle>{item.title}</Card.SubTitle>
                                    <Card.Text>{item.description}</Card.Text>
                                </Card.Meta>
                            </Card.Item>
                        ))
                    }
                    </Card.Entities>
                    <Card.Feature category={category}>
                        <Player>
                            <Player.Button>Play</Player.Button>
                            <Player.Video />
                        </Player>
                    </Card.Feature>
                    </Card>
                ))}
            </Card.Group>

            <FooterContainer minimal={true} />
        </>
    ):<SelectProfileContainer user={user} setProfile={setProfile} />
}
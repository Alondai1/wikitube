import React from "react";
import "./YoutubeResultPreview.style.scss";
import { Item } from 'semantic-ui-react'


const YoutubeResultPreview = ({ result, setCurrentVideo, theme }) => {
    return (
        <div className="youtube-result-preview" onClick={()=>setCurrentVideo(result.id.videoId)}>
             <Item.Group>

            <Item>
                <Item.Image size='tiny' src={result.snippet.thumbnails.default.url}/>

                <Item.Content >
                    <Item.Header as='a'>{result.snippet.title}</Item.Header>
                    <Item.Meta className={theme}>{result.snippet.description}</Item.Meta>
                    <Item.Description>
                    </Item.Description>
                    <Item.Extra>Additional Details</Item.Extra>
                </Item.Content>
            </Item>
             </Item.Group>
        </div>
    );
}

export default YoutubeResultPreview;

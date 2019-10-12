import React from "react";
import { Divider, Button, Header, Icon, Segment } from "semantic-ui-react";
import "./WikiInfo.style.scss";
const WikiInfo = ({ info, theme }) => {
    return (
        <Segment placeholder className={`segment-container ${theme}`}>
            <Header icon>
                <Icon name="world" className="segment-icon" />
                {info[1][0]}
            </Header>
            {info[2][0]}
            <Divider section />
            <a href={info[3][0]} target="_blank" rel="noopener noreferrer">
                <Button basic color="teal">
                    Read More
        </Button>
            </a>
        </Segment>
    );
};

export default WikiInfo;

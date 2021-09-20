//import './data.js';
import './data.json';
import './roadmap.css';
import React from 'react';
import ScriptTag from 'react-script-tag';
import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
cytoscape.use(coseBilkent);

function RoadMap(){
    return(
        <>
            <div id="cy"></div>
            <ScriptTag src="./data.js" type="text/javascript" />
        </>
    )
}

export default RoadMap;
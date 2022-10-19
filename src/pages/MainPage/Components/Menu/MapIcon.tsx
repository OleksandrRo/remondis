import React from "react";
import mapIcon from 'assets/images/map.svg';
import { MapIconStyle } from "./styles/MapIconStyle.styled";


export const MapIcon: React.FC = () => {
    return( 
                            
          <MapIconStyle src={mapIcon} alt=""/>   
    )
}
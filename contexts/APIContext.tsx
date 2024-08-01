import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { clearInterval } from "timers";

export type APIContextType = {
    loading: boolean,
    data: any,
    getAllTokens: any,
    solPrice: any
}

export const APIContext = React.createContext<APIContextType | null>(null);

export const APIProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [solPrice, setSolPrice] = useState(160);

    const getAllTokens = async(viewId:'trending'|'top'|'rising'|'new'|'finalized') => {
        setLoading(true);
        try {
            const res = await axios.get(`https://api.moonshot.cc/tokens/v1/${viewId}/solana`);
            console.log(res.data);
            setData(res.data);
        } catch(err) {
            console.log("getAllTokens error:", err)
        }
        setLoading(false);
    }

    const getSolPrice = async() => {
        try {
        const res = await axios.get('https://api.geckoterminal.com/api/v2/simple/networks/solana/token_price/So11111111111111111111111111111111111111112');
        const _solPrice = Number(res.data.data.attributes.token_prices['So11111111111111111111111111111111111111112']);
        console.log(">>> Current SolPrice:", _solPrice)
        setSolPrice(_solPrice);
        setTimeout(() => {
            getSolPrice()
        }, 30000);
        } catch(err) {
            console.log("getSolPrice error:", err)
        }
    }

    useEffect(() => {
        const initialize = async() => {
            await getAllTokens('trending');
            await getSolPrice();
        }
        initialize();
    }, [])

    return (
        <APIContext.Provider value={{data, loading, solPrice, getAllTokens}}>
            {props.children}
        </APIContext.Provider>
    )
}

export const useAPI = () => {
    const apiManager = useContext(APIContext);
    return apiManager || [{}, async() => {}];
}
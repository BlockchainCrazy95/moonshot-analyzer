'use client';
import React, { useEffect, useState } from 'react';
import { useAPI } from '../../../contexts/APIContext';
import { PAGE_SIZE } from '../../../config/config';
import { shortenAddress } from '../../_components/Core/utils';
import LiveIcon from '../../_components/Icons/LiveIcon';
import TelegramIcon from '../../_components/Icons/Telegram';
import TwitterIcon from '../../_components/Icons/Twitter';
import DiscordIcon from '../../_components/Icons/Discord';
import WebsiteIcon from '../../_components/Icons/Webiste';
import DetailModal from '../../_components/Layout/DetailModal';

export default function Overview() {
    const { loading, data, solPrice, getAllTokens } = useAPI();

    const [filterType, setFilterType] = useState("trending");
    const [page, setPage] = useState(0);
    const [filteredData, setFilteredData] = useState([]);
    const [isDetailOpen, setDetailOpen] = useState(false);
    const [selData, setSelData] = useState({});

    useEffect(() => {
        if(data.length > 0) {
            const _filtered = data.slice(PAGE_SIZE * page, PAGE_SIZE * (page + 1));
            console.log(_filtered)
            setFilteredData(_filtered);
        }
    }, [data])

    useEffect(() => {
        getAllTokens(filterType);
    }, [filterType])

    const renderTableData = (index, rowData) => {
        const now = Date.now();
        const liveTime = parseInt(`${(now - rowData.createdAt) / 1000}`);
        const day = parseInt(`${liveTime / 86400}`);
        const hour = parseInt(`${(liveTime % 86400) / 3600}`);
        const min = parseInt(`${(liveTime % 3600) / 60}`);
        const prettierMarketCap = (num) => {
            return Number(num / solPrice).toFixed(2);
        }
        const prettierVolume = (num) => {
            if(num < 1000) return parseInt(num);
            return parseInt(`${(num + 500) / 1000}`) + 'K';
        }
        return (<tr className='text-center'>
            <td>{index + 1}</td>
            <td>
                <div className='flex flex-row justify-between items-center gap-2'>
                    <img src={`${rowData.profile.icon}`} className='!w-[30px] !h-[30px]' />
                    <a
                        className='hover:text-blue-400'
                        href={`https://solscan.io/token/${rowData.baseToken.address}`}
                        target='_blank'
                    >
                        {`${rowData.baseToken.name}`}<br/>{`(${rowData.baseToken.symbol})`}
                    </a>
                </div>
            </td>
            <td><span className='flex flex-row justify-center gap-2 items-center'><LiveIcon />{day > 0 ? `${day}d` : (hour > 0 ? `${hour}h` : (min > 0 ? `${min}m` : ''))}</span></td>
            {/* <td>{`${day != 0 ? day + 'd ': ''}${hour != 0 ? hour+'h ':''}${min != 0 ? min + 'm' : ''} ago`}</td> */}
            <td>
                <div className='flex flex-row gap-1 justify-between'>
                    <span className='text-[#DFFF16] font-bold text-center w-[90px]'>{rowData.moonshot.progress}%</span>
                    <span className='text-[#ff5816] font-bold text-center w-[90px]'>{prettierMarketCap(rowData.marketCap)} SOL</span>
                    <span className='text-[#4816ff] font-bold text-center w-[90px]'>{rowData.txns.h24.total} txns</span>
                    <span className='text-[#16ff50] font-bold text-center w-[90px]'>${prettierVolume(rowData.volume.h24.total)} vol</span>
                </div>
            </td>
            <td>
                <div className='flex flex-row gap-[6px]'>
                {rowData.profile.links?.length > 0 && rowData.profile.links.map((link, index) => {
                    const getIcon = (link, index) => {
                        if(index == 0 && (link.indexOf("x.com") == -1 || link.indexOf("t.me")))
                            return <WebsiteIcon />
                        else if(link.indexOf("x.com") != -1)
                            return <TwitterIcon />
                        else if(link.indexOf("t.me") != -1)
                            return <TelegramIcon />
                        else if(link.indexOf("discord.gg") != -1)
                            return <DiscordIcon />
                        else if(link.indexOf("linktr") != -1 || link.indexOf("reddit.com") != -1)
                            return <></>

                    }
                    return <div>{getIcon(link, index)}</div>
                })}
                </div>
            </td>
            <td>
                {/* <a href={`${rowData.url}`} target="_blank">Chart</a> */}
                <div
                    onClick={() => {
                        setSelData(rowData);
                        setDetailOpen(true);
                    }}
                >Detail</div>
            </td>
        </tr>)
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-center z-0 relative bg-overview bg-cover bg-center sm:bg-top">
            <div className='w-full min-h-screen h-full py-28 px-4 lg:px-12 2xl:px-20'>
                <div className='flex flex-col min-h-screen w-full mt-28 lg:mt-0 gap-10 bg-[#00000050] p-16'>
                    <div className='flex flex-row justify-between'>
                        <div className='flex flex-row gap-4'>
                            <div
                                className={`${filterType == "trending" ? "bg-[#DFFF16c0] text-black font-semibold" : "bg-[#4853246b]"} px-4 py-2 rounded-md cursor-pointer`}
                                onClick={() => setFilterType("trending")}
                            >Trending</div>
                            <div
                                className={`${filterType == "top" ? "bg-[#DFFF16c0] text-black font-semibold" : "bg-[#4853246b]"} px-4 py-2 rounded-md cursor-pointer`}
                                onClick={() => setFilterType("top")}
                            >Top</div>
                            <div
                                className={`${filterType == "rising" ? "bg-[#DFFF16c0] text-black font-semibold" : "bg-[#4853246b]"} px-4 py-2 rounded-md cursor-pointer`}
                                onClick={() => setFilterType("rising")}
                            >Rising</div>
                            <div
                                className={`${filterType == "new" ? "bg-[#DFFF16c0] text-black font-semibold" : "bg-[#4853246b]"} px-4 py-2 rounded-md cursor-pointer`}
                                onClick={() => setFilterType("new")}
                            >New</div>
                            <div
                                className={`${filterType == "finalized" ? "bg-[#DFFF16c0] text-black font-semibold" : "bg-[#4853246b]"} px-4 py-2 rounded-md cursor-pointer`}
                                onClick={() => setFilterType("finalized")}
                            >Finalized</div>
                        </div>
                        <div>SOL: ${Number(solPrice).toFixed(2)}</div>
                    </div>
                    <div className='border border-[#ffffff30] border-dashed p-4'>
                        <div className='text-center py-2'>Token List</div>
                        <table className='token-table'>
                            <thead>
                                <th className='rounded-tl-md w-[40px]'>No</th>
                                <th className='w-[160px]'>Token</th>
                                <th className='w-[80px]'>Live</th>
                                <th className='w-[380px]'>
                                    <div className='flex flex-row justify-between'>
                                        <span className='w-[90px] text-center'>Progress</span>
                                        <span className='w-[90px] text-center'>MC</span>
                                        <span className='w-[90px] text-center'>Txns</span>
                                        <span className='w-[90px] text-center'>Vol</span>
                                    </div>
                                </th>
                                <th className='w-[100px]'>Socials</th>
                                <th className='rounded-tr-md'>Status</th>
                            </thead>
                            <tbody>
                                {loading ? 
                                    <tr><td colSpan={6} className='text-center'>Loading...</td></tr>
                                    :
                                    (filteredData.length > 0
                                        ? filteredData.map((rowData, index) => {
                                            return renderTableData(PAGE_SIZE * page + index, rowData);
                                        })
                                        :
                                        <tr>
                                            <td colSpan={6} className='text-center'>No Data</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <DetailModal isOpen={isDetailOpen} setOpen={setDetailOpen} data={selData} />
        </main>
    )
}
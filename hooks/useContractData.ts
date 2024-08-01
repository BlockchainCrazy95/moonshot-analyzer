import { useState, useCallback } from 'react'
import { readContract } from '@wagmi/core'
import { erc20ContractABI } from '../config/abi/ERC20ABI'
import { PresaleConfig } from '../config/config';

export const fetchUSDTBal = () => {
    const [usdtBal, setUSDBal] = useState(0);
    const handleUSDTBal = useCallback(async (address: any) => {
        if (address) {
            try {
                const data = await readContract({
                    address: PresaleConfig.usdtAddress as `0x${string}`,
                    abi: erc20ContractABI,
                    functionName: 'balanceOf',
                    args: [address as `0x${string}`],
                });

                setUSDBal(Number(data) / (10 ** 18));
            } catch (error) {
                console.error('Error fetching contract data:', error);
            }
        }
        return false;
    }, []);

    return { usdtBal, onUSDTBal: handleUSDTBal };
};

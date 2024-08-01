import React from 'react'

function CopyIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M216 32H88a8 8 0 0 0-8 8v40H40a8 8 0 0 0-8 8v128a8 8 0 0 0 8 8h128a8 8 0 0 0 8-8v-40h40a8 8 0 0 0 8-8V40a8 8 0 0 0-8-8Zm-56 176H48V96h112Zm48-48h-32V88a8 8 0 0 0-8-8H96V48h112Z" /></svg>
    )
}

export function CopiedIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.2812 6.28125L11 23.5625L3.71875 16.2812L2.28125 17.7188L10.2812 25.7188L11 26.4062L11.7188 25.7188L29.7188 7.71875L28.2812 6.28125Z" fill="currentColor" />
        </svg>
    )
}

export default CopyIcon
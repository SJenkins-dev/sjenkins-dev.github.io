import React from 'react'
import ReactIcon from './icon'

type LinkProps = {
    title: string;
    link: string;
    icon: string;
}
function FooterIconLink({ title, link, icon }: LinkProps) {
    return (
        <a href={link} aria-label={`Go to ${title}`}>
            <ReactIcon iconName={icon} />
            <p>{title}</p>
        </a>
    )
}

export default FooterIconLink

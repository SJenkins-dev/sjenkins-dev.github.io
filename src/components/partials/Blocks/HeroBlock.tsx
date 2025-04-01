import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import { Paintstroke } from "../../svg/paintstroke";
import type { PageBlocksHeroBlock } from "../../../tina/__generated__/types";

export function HeroBlock (props: PageBlocksHeroBlock){
    return (
<section id="ocean" className="hero-section">
<Paintstroke/>
  <div transition:animate="slide" className="site-wrapper">
    <div  className="hero-content" data-tina-field={tinaField(props, "message")} >
    <TinaMarkdown content={props.message} components= {{
      h2: props => <h2 className="hero-title" {...props} />,
      p: props => <p className="hero-lede" {...props} />,
    }} />
    </div>

    <div className="cta-row">
          {props.links?.map((link) => {
            switch (link?.style) {
              case "button": {
                return (
                  <a role="button" className="btn primary filled" data-tina-field={tinaField(link, "label")} key={"a"} href={link.link || ""} >{link.label}</a>
                )
              }
              case "simple": {
                return (
                  <a role="button" className="btn secondary filled" data-tina-field={tinaField(link, "label")} key={"b"} href={link?.link || ""} >{link.label} </a>
                )
              }
            }
          })}
    
    </div>
   </div>
  </section>	
    )

}

export default HeroBlock;
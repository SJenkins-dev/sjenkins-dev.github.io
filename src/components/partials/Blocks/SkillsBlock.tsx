import { TinaMarkdown } from "tinacms/dist/rich-text";
import { tinaField, useTina } from "tinacms/dist/react";
import type { PageBlocksSkillsBlock } from "../../../tina/__generated__/types";
import { useState } from "react";

export function SkillsBlock (props: PageBlocksSkillsBlock){

    return (
<section className="skills-section">
    <div className="site-wrapper">
    <div className="intro" data-tina-field={tinaField(props, "intro")}>
    <TinaMarkdown content={props.intro}/>
    </div>
        <div className="skills-column">
            <h3 className="skills-title">My skills</h3>
            <div className="skills-list">
            {props.skillcards?.map((skill, i)=>{
            
            return (
                <article className="card" key={i}>
                    <div className="content">
                        <h4 className="skill-name" data-tina-field={tinaField(skill, "name")}>{skill.name}</h4>
                        <p className="skill-description" data-tina-field={tinaField(skill, "description")}> {skill.description}</p>
                <ul data-tina-field={tinaField(skill, "tags")} className="tag-block">
                 {skill.tags?.map((tag, t) =>
                    {
                        return (
                            <li key={t}>
                                {tag}
                            </li>
                        )
                    })}
                </ul>
                </div>
                </article> 
            )
            })}
            </div>
          </div>
          </div>
    </section>	
    )
};

export default SkillsBlock;

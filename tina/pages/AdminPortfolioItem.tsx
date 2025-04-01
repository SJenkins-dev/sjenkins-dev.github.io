import React from 'react';
import { tinaField, useTina } from "tinacms/dist/react";
import type { ProjectQuery, ProjectQueryVariables } from '../__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';


type Props = {
	variables: ProjectQueryVariables;
	data: ProjectQuery;
	query: string;
}

export default function AdminPortfolioItem(props: Props) {

	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const project = data.project;
	const timeframe = data.project.timeframe;
	const clientURL = data.project.clienturl;
	const liveURL = data.project.liveurl;
	const imgsrc = data.project.thumbImgSrc;
	const imgalt = data.project.thumbImgAlt;

	return (
		<article>
			<section id="ocean" className="hero-section portfolio">
				<div transition:animate="slide" className="site-wrapper">
			<div className="hero-image" data-tina-field={tinaField(project, "thumbImgSrc")}>
				<div className="card">
				<figure>
				<img src ={imgsrc} alt={imgalt} loading="lazy" decoding="async"/>
				</figure>	
				</div>
			</div>
			<div className="project-details">
			<div className="project-content">
			{generateClientURL(project, clientURL)}
			<h2 className="project-title" data-tina-field={tinaField(project, "title")} >{project.title}</h2>
			<p className="project-description" data-tina-field={tinaField(project, "description")}>{project.description}</p>
			<div className="project-deliverables">
			<div className="project-deliverables-title"><p><strong>Deliverables:</strong></p></div>
			<div className="project-deliverables-content"data-tina-field={tinaField(project, "deliverable")}><p>{project.deliverable}</p></div>
			</div>
			{generateTimeframe(project, timeframe)}
			<ul data-tina-field={tinaField(project, "categories")} className="tag-block">
                 {project.categories?.map((category, c) =>
                    {
                        return (
                            <li key={c}>
                                {category}
                            </li>
                        )
                    })}
			</ul>
			{generateLiveURL(project, liveURL)}
			</div>
			</div>
			</div>	

			<svg width="1440" height="561" role="presentation" aria-hidden="true" viewBox="0 0 1440 561" fill="none" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="paintstroke"  clipPathUnits="objectBoundingBox">
    <path d="M1,0 L0,0 L0,0.984 C0.016,0.982,0.034,0.981,0.044,0.982 C0.053,0.983,0.056,0.983,0.061,0.978 C0.065,0.975,0.069,0.972,0.069,0.972 C0.07,0.973,0.069,0.974,0.068,0.975 C0.066,0.976,0.064,0.979,0.063,0.981 C0.062,0.984,0.065,0.984,0.081,0.985 C0.091,0.985,0.1,0.987,0.1,0.988 C0.1,0.989,0.106,0.991,0.113,0.991 C0.121,0.992,0.133,0.994,0.141,0.995 C0.148,0.996,0.158,0.996,0.162,0.995 C0.167,0.995,0.18,0.994,0.191,0.995 C0.203,0.995,0.213,0.995,0.214,0.994 C0.216,0.993,0.217,0.993,0.217,0.997 C0.217,1,0.217,1,0.219,0.999 C0.22,0.999,0.221,0.997,0.221,0.996 C0.221,0.995,0.226,0.995,0.232,0.996 C0.238,0.997,0.248,0.997,0.256,0.997 C0.261,0.996,0.268,0.996,0.273,0.995 C0.275,0.995,0.276,0.995,0.277,0.995 C0.279,0.995,0.281,0.994,0.285,0.994 C0.29,0.994,0.297,0.993,0.303,0.992 C0.313,0.991,0.324,0.99,0.328,0.989 C0.332,0.989,0.336,0.988,0.336,0.988 C0.337,0.987,0.348,0.985,0.36,0.983 C0.372,0.98,0.386,0.977,0.391,0.975 C0.416,0.968,0.439,0.967,0.492,0.969 C0.513,0.97,0.533,0.971,0.536,0.971 C0.538,0.971,0.552,0.971,0.566,0.97 C0.581,0.97,0.597,0.969,0.603,0.969 L0.604,0.968 C0.61,0.968,0.62,0.966,0.628,0.966 C0.635,0.965,0.644,0.964,0.649,0.963 C0.653,0.962,0.664,0.961,0.673,0.96 C0.682,0.959,0.69,0.958,0.69,0.958 L0.69,0.958 C0.691,0.957,0.698,0.956,0.706,0.955 C0.713,0.955,0.722,0.954,0.725,0.953 C0.735,0.952,0.741,0.952,0.759,0.952 C0.769,0.952,0.781,0.952,0.784,0.951 C0.788,0.951,0.8,0.951,0.812,0.952 C0.823,0.952,0.837,0.952,0.843,0.952 C0.861,0.951,0.876,0.951,0.916,0.952 C0.938,0.953,0.96,0.952,0.965,0.95 C0.973,0.948,0.983,0.947,1,0.947 L1,0"/>
    </clipPath>
    </svg>	
			</section>
			<section className='case-study'>
				<div className="site-wrapper">
			<div className="prose">
				<div data-tina-field={tinaField(project, "body")}>
					<TinaMarkdown content={project.body} components={{
					caseStudyImage: (props) => {
						return (
							<>
							<figure className="card project-image">
							<img src={props.imgSrc} alt={props.imgAlt} loading="lazy"/>
							<div className="content">		
							<figcaption>{props.imgCaption}</figcaption>
							</div>
							</figure>
							</>
						)
					}
					}} />
				</div>
			</div>
			</div>
			</section>
		</article>
	);
}

export function generateTimeframe(project, timeframe) {

	if(timeframe !== null){
		return(
			<div className="project-timeframe">
			<div className="project-timeframe-title"><p><strong>Timeframe:</strong></p></div>
			<div className="project-deliverables-content"data-tina-field={tinaField(project, "timeframe")}><p>{project.timeframe}</p></div>
			</div>
			
		)}
	}


export function generateClientURL(project, clientURL) {

	if(clientURL !== null){
		return(
					<p className="project-client-name" data-tina-field={tinaField(project, "client")} ><a href={project.clienturl} target="_blank">{project.client}</a></p>
		)}else {
				return (
						<p className="project-client-name" data-tina-field={tinaField(project, "client")} >{project.client}</p>
				)}
	}
	
	export function generateLiveURL(project, liveURL) {
	
		if(liveURL !== null ){
			return (
			<div className="cta-row">
			<a className='btn primary filled' href={project.liveurl} target="_blank">Visit live site</a>
			</div>
			)
			}
		}

import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import HeroBlock from "../../src/components/partials/Blocks/HeroBlock";
import SkillsBlock from "../../src/components/partials/Blocks/SkillsBlock";

type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const TinaPage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.page;

	return (
		<div>
			{props.data.page.blocks?.map((block, i) =>{
						switch(block?.__typename){
							case "PageBlocksHeroBlock": {
								return <HeroBlock key={i} {...block}/>
							}
							case "PageBlocksSkillsBlock": {
								return <SkillsBlock key={i} {...block}/>
							}
			
						}
					})}
		</div>
	)
}
export default TinaPage;

import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import HeroBlock from "../../src/components/partials/Blocks/HeroBlock";


type Props = {
	variables: PageQueryVariables;
	data: PageQuery;
	query: string;
}

const HomePage = (props: Props) => {
	const { data } = useTina({
		query: props.query,
		variables: props.variables,
		data: props.data,
	})

	const page = data.page;


	return (
		<div>
			{props.data.page.blocks?.map(block =>{
			switch(block?.__typename){
				case "PageBlocksHeroBlock": {
					return <HeroBlock {...block}/>
				}
			}
		})}
		</div>
	)
}

export default HomePage;

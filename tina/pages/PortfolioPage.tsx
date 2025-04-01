import { tinaField, useTina } from "tinacms/dist/react";
import type { PageQuery, PageQueryVariables } from "../__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

type Props = {
    variables: PageQueryVariables;
    data: PageQuery;
    query: string;
}

const TinaPortfolioPage = (props: Props) => {
    const { data } = useTina({
        query: props.query,
        variables: props.variables,
        data: props.data,
    })

    const page = data.page;

    return (
            <div data-tina-field={tinaField(page, "body")}>
                <TinaMarkdown content={page.body} />
            </div>
    )
}

export default TinaPortfolioPage;

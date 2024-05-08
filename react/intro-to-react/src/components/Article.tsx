type ArticleProps = {
    title: string;
    author: string;
    children?: React.ReactNode;
}

export const Article = ({title, author, children}: ArticleProps) => {

    return (
        <article>
            <h2>Title: {title}</h2>
            <h3>Author: {author}</h3>
            <div>{children}</div>
        </article>
    );
}
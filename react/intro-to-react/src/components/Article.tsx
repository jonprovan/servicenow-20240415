import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

type ArticleProps = {
    title: string;
    author: string;
    children?: React.ReactNode;
}

export const Article = ({title, author, children}: ArticleProps) => {
    const { theme } = useContext(ThemeContext);

    return (
        <article style={theme}>
            <h2>Title: {title}</h2>
            <h3>Author: {author}</h3>
            <div>{children}</div>
        </article>
    );
}